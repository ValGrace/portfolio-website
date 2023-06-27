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
 