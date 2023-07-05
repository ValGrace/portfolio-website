package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/ValGrace/portfolio-server/src/models"
	"github.com/ValGrace/portfolio-server/src/utils"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"strconv"
)

var newProject models.Project

// var newSkill models.Skillset

func GetProject(w http.ResponseWriter, r *http.Request) {
	newProjects := models.GetAllProjects()
	res, _ := json.Marshal(newProjects)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetProjectById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	projectId := vars["projectId"]
	ID, err := strconv.ParseInt(projectId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}

	projectDetails, _ := models.GetProjectById(ID)
	res, _ := json.Marshal(projectDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)

}

func CreateProject(w http.ResponseWriter, r *http.Request) {
	CreateProject := &models.Project{}
	fmt.Print(CreateProject)
	utils.ParseBody(r, CreateProject)

	b := CreateProject.CreateProject()

	res, err := json.Marshal(b)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	fmt.Print(http.StatusCreated)
	w.Write(res)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("success --------")
}

func DeleteProject(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	projectId := vars["projectId"]
	ID, err := strconv.ParseInt(projectId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	project := models.DeleteProject(ID)
	res, _ := json.Marshal(project)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
func UpdateProject(w http.ResponseWriter, r *http.Request) {
	var updateProject = &models.Project{}
	// var updateSkill = &models.Skillset{}
	utils.ParseBody(r, updateProject)
	vars := mux.Vars(r)
	projectId := vars["projectId"]
	ID, err := strconv.ParseInt(projectId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	projectDetails, db := models.GetProjectById(ID)

	if updateProject.Title != "" {
		projectDetails.Title = updateProject.Title
	}
	// if updateProject.Photo != []byte {
	// 	projectDetails.Photo = updateProject.Photo
	// }
	// if updateProject.Tech != []string {
	// 	projectDetails.Tech[]string = updateProject.Tech
	// }
	if updateProject.Description != "" {
		projectDetails.Description = updateProject.Description
	}

	db.Save(&projectDetails)
	res, _ := json.Marshal(projectDetails)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
