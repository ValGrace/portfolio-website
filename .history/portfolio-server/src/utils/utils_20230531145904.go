package utils

import (
	"encoding/json"
	"fmt"
	"image/jpeg"
	"net/http"
	"os"
	"strings"

	"github.com/ValGrace/portfolio-server/src/photoapi"
)

func ParseBody(r *http.Request, X interface{}, Y interface{}) {

	r.ParseMultipartForm(32 << 20)

	file, handler, err := r.FormFile("photo")
	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	photo := handler.Filename

	title := r.FormValue("title")
	techSkills :=strings.Split(r.FormValue("skills"), ",")

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
     
	Y = &techSkills
	fmt.Print(Y)
	projectData := fmt.Sprintf(`{"Title": "%s", "Photo": "%s", "Tech":"%v", "Description": "%s"}`, title, response, Y, description)
	reader := []byte(projectData)
	// skillReader, _ := json.Marshal(skillData)
	json.Unmarshal(reader, X)
	
	return

}
