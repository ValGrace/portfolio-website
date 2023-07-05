package models

import (
	"github.com/ValGrace/portfolio-server/src/pkg/config"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

type Project struct {
	gorm.Model
	Title       string `gorm:""json:"title"`
	Photo       string `gorm:""json:"photo"`
	Tech        string `gorm:""json:"tech"`
	Description string `json:"description"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Project{})

}

func (b *Project) CreateProject() *Project {
	db.NewRecord(b)
	db.Create(&b)
	return b
}

// func (t *Skillset) CreateSkills() *Skillset {
// 	db.NewRecord(t)

//		db.Create(&t)
//		return t
//	}
func GetAllProjects() []Project {
	var Projects []Project
	db.Find(&Projects)
	return Projects
}

func GetProjectById(id int64) (*Project, *gorm.DB) {
	var getProject Project
	db := db.Where("ID=?", id).Find(&getProject)
	return &getProject, db
}

func DeleteProject(ID int64) Project {
	var project Project
	db.Where("ID=?", ID).Delete(project)
	return project
}
