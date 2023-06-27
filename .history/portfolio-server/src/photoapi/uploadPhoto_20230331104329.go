package photoapi

import (
	"context"
	"fmt"
	"os"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api"
	"github.com/cloudinary/cloudinary-go/v2/api/admin"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
)

func credentials() (*cloudinary.Cloudinary, context.Context) {
	os.Setenv("cloudinary_url", "CLOUDINARY_URL=cloudinary://986361419142917:zY_fQ_Z6xYfornz2MxdLfWVg3W4@dnjzdxki1")

	cld, _ := cloudinary.New()
	cld.Config.URL.Secure = true
	ctx := context.Background()
	return cld, ctx
}

func uploadImage(cld *cloudinary.Cloudinary, ctx context.Context, imagePath string) {
	resp, _ := cld.Upload.Upload(ctx, "https://cloudinary-devs.github.io/cld-docs-assets/images/bu", uploader.UploadParams{
		PublicID:       "",
		UniqueFilename: api.Bool(false),
		Overwrite:      api.Bool(true)})
	fmt.Println("Delivery URL ", resp.SecureURL)
}

func getAssetInfo(cld *cloudinary.Cloudinary, ctx context.Context, imageInfo string) {
	resp, _ := cld.Admin.Asset(ctx, admin.AssetParams{PublicID: ""})
	fmt.Println("Image is: ", resp)
}
