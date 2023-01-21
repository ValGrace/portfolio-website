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

	// "github.com/gin-gonic/contrib/static"
	// "github.com/gin-gonic/gin"
	"github.com/gorilla/mux"
)

var staticFS embed.FS

type clientHandler struct {
	staticPath string
	indexPath  string
}

type Project struct {
	ID          string  `json:"id"`
	Title       string  `json:"title"`
	Photo       string  `json:"photo"`
	Skills      *Skills `json:"skills"`
	Description string  `json:"description"`
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

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

var projects []Project

func getProjects(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(projects)
}

func createProject(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Acess-Control-Allow-Methods", "POST")
	r.ParseForm()
	var project Project
	_ = json.NewDecoder(r.Body).Decode(&projects)

	project.ID = strconv.Itoa(rand.Intn(100000000))
	project.Title = r.FormValue("title")
	project.Photo = r.FormValue("photo")

	project.Description = r.FormValue("descr")
	projects = append(projects, project)
	json.NewEncoder(w).Encode(project)
}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/projects", getProjects).Methods("GET")
	r.HandleFunc("/projects", createProject).Methods("POST")
	spa := clientHandler{staticPath: "../../portfolio/public", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)
	fmt.Printf("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
