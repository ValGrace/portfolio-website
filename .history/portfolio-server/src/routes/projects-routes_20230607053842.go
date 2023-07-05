package routes

import (
	"github.com/ValGrace/portfolio-server/src/controllers"
	"github.com/gorilla/mux"
)

var RegisterProjectRoutes = func(router *mux.Router) {
	router.HandleFunc("/projects/", controllers.CreateProject).Methods("POST")
	router.HandleFunc("/projects", controllers.GetProject).Methods("GET")
	router.HandleFunc("/projects/{projectId}", controllers.GetProjectById).Methods("GET")
	router.HandleFunc("/projects/{projectId}", controllers.UpdateProject).Methods("PUT")
	router.HandleFunc("/projects/{projectId}", controllers.DeleteProject).Methods("DELETE")

}
