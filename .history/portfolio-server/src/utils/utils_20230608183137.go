package utils

import (
	"encoding/json"
	"fmt"
	"github.com/ValGrace/portfolio-server/src/photoapi"
	"image/jpeg"
	"net/http"
	"os"
	// "strings"
)

func ParseBody(r *http.Request, X interface{}) {

	r.ParseMultipartForm(32 << 20)

	file, handler, err := r.FormFile("photo")
	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	photo := handler.Filename

	title := r.FormValue("title")
	techSkills := r.FormValue("skills")
	livelink := r.FormValue("livelink")
	gitlink := r.FormValue("gitlink")
	problem := r.FormValue("problem")
	solution := r.FormValue("solution")
	fmt.Println(file)
	img, err := jpeg.Decode(file)
	if err != nil {
		panic(err)
	}

	newFile, err := os.Create(photo)
	if err != nil {
		panic(err)
	}

	defer newFile.Close()

	err = jpeg.Encode(newFile, img, nil)
	fmt.Println(photo)
	// upload image to cloudinary
	cld, ctx := photoapi.Credentials()
	photoapi.UploadImage(cld, ctx, newFile.Name())
	response := photoapi.GetAssetInfo(cld, ctx, newFile.Name())
	fmt.Println(response)
	description := r.FormValue("descr")

	projectData := fmt.Sprintf(`{"Title": "%s", "Livelink": "%s", "Gitlink": "%s", "Description": "%s", "Photo": "%s", Problem": "%s", "Solution": "%s", "Tech":"%s", }`, title, livelink, gitlink, description, response, problem, solution, techSkills)
	reader := []byte(projectData)

	fmt.Println(projectData)
	json.Unmarshal(reader, X)
	fmt.Println(reader)
	return

}
