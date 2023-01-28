package utils

import (
	"encoding/json"
	"fmt"

	"net/http"

	"strings"
)

func ParseBody(r *http.Request, X interface{}) {

	r.ParseMultipartForm(32 << 20)

	file, handler, err := r.FormFile("photo")
	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	// f, err := os.OpenFile("./upload/"+handler.Filename, os.O_WRONLY|os.O_CREATE, 0666)

	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// defer f.Close()
	// photoCopy, _ := io.Copy(f, file)

	photo := handler.Filename

	title := r.FormValue("title")
	techSkills := strings.Split(r.FormValue("skills"), ", ")

	// for _, tech := range techSkills {
	// 	project.Tech = append(project.Tech, Skills{tech})
	// }
	fmt.Println(photo)
	description := r.FormValue("descr")
	projectData := fmt.Sprintf(`{"Title": "%s","Photo": %s,"Tech": %s,"Description": "%s"}`, title, photo, techSkills, description)
	reader := []byte(projectData)

	json.Unmarshal(reader, X)

	return

}
