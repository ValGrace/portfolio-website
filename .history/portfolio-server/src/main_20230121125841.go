package main

import (
	"embed"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"

	"path/filepath"
	"strconv"
	"strings"

	"github.com/gorilla/mux"
)

var staticFS embed.FS

type clientHandler struct {
	staticPath string
	indexPath  string
}

type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Photo       string   `json:"photo"`
	Tech        []Skills `json:"skills"`
	Description string   `json:"description"`
}
type Skills struct {
	Skill string `json:"skill"`
}

func (h clientHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)

		return
	}

	path = filepath.Join(h.staticPath, path)

	// _, err = os.Stat(path)

	// if os.IsNotExist(err) {
	// 	http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
	// 	return
	// } else if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)

	// 	return
	// }

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)

}

var projects []Project

func getProjects(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "multipart/form-data")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(projects)
}

func createProject(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "multipart/form-data")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Acess-Control-Allow-Methods", "POST")
	r.ParseForm()
	var project Project
	// _ = json.NewDecoder(r.Body).Decode(&projects)

	project.ID = strconv.Itoa(rand.Intn(100000000))
	file, handler, err := r.FormFile("photo")
	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	project.Photo = handler.Filename
	project.Title = r.FormValue("title")
	techSkills := strings.Split(r.FormValue("skills"), ", ")

	for _, tech := range techSkills {
		project.Tech = append(project.Tech, Skills{tech})
	}

	project.Description = r.FormValue("descr")
	fmt.Fprintf(w, "title =%s", project.Title)
	projects = append(projects, project)
	json.NewEncoder(w).Encode(projects)
}

func main() {

	r := mux.NewRouter()

	// client := r.PathPrefix("/client").Subrouter()
	r.HandleFunc("/viewfiles", getProjects).Methods("GET")
	r.HandleFunc("/projects", createProject).Methods("POST")
	spa := clientHandler{staticPath: "../../portfolio/build", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)

	fmt.Printf("Starting server at port 8080")

	r.PathPrefix("/static").Handler(http.StripPrefix("/static", http.FileServer(http.Dir("../../portfolio/build/static"))))
	log.Fatal(http.ListenAndServe(":8080", r))
}
