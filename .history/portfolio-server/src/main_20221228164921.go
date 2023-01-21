package main

import (
	"embed"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
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

var projects []Project

func getProjects(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}

func createProject(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("")
	r.ParseForm()
	var project Project
	_ = json.NewDecoder(r.Body).Decode(&projects)

	project.ID = strconv.Itoa(rand.Intn(100000000))
	projects = append(projects, project)
	json.NewEncoder(w).Encode(project)
}

func main() {
	// router := gin.Default()

	r := mux.NewRouter()
	r.HandleFunc("/projects", getProjects).Methods("GET")
	r.HandleFunc("/projects", createProject).Methods("POST")

	fmt.Printf("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
