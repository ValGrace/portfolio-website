package main

import (
	"embed"
	// "encoding/json"
	"fmt"
	"log"
	"net/http"
	"path/filepath"

	"github.com/ValGrace/portfolio-server/src/routes"
	"github.com/gorilla/mux"
)

var staticFS embed.FS

type clientHandler struct {
	staticPath string
	indexPath  string
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

func main() {

	r := mux.NewRouter()
	routes.RegisterProjectRoutes(r)
	spa := clientHandler{staticPath: "../../portfolio/build", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)
	http.Handle("/", r)
	fmt.Printf("Starting server at port 8080")

	r.PathPrefix("/static").Handler(http.StripPrefix("/static", http.FileServer(http.Dir("../../portfolio/build/static"))))
	log.Fatal(http.ListenAndServe(":8080", r))
}

// var projects []Project

// func getProjects(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "multipart/form-data")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	fmt.Fprintf(w, "projects = %s", projects)
// }

// func createProject(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "multipart/form-data")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Acess-Control-Allow-Methods", "POST")
// 	r.ParseForm()
// 	var project Project
// 	// _ = json.NewDecoder(r.Body).Decode(&projects)

// 	project.ID = strconv.Itoa(rand.Intn(100000000))
// 	file, handler, err := r.FormFile("photo")
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}

// 	defer file.Close()

// 	project.Photo = handler.Filename
// 	project.Title = r.FormValue("title")
// 	techSkills := strings.Split(r.FormValue("skills"), ", ")

// 	for _, tech := range techSkills {
// 		project.Tech = append(project.Tech, Skills{tech})
// 	}

// 	project.Description = r.FormValue("descr")
// 	fmt.Fprintf(w, "title =%s", project.Title)
// 	projects = append(projects, project)
// 	// json.NewEncoder(w).Encode(projects)
// }
