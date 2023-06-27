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

func Credentials() (*cloudinary.Cloudinary, context.Context) {
	os.Setenv("CLOUDINARY_URL", "cloudinary://986361419142917:zY_fQ_Z6xYfornz2MxdLfWVg3W4@dnjzdxki1")

	cld, _ := cloudinary.New()
	cld.Config.URL.Secure = true
	ctx := context.Background()
	return cld, ctx
}

func UploadImage(cld *cloudinary.Cloudinary, ctx context.Context, imagePath string) {
	resp, err := cld.Upload.Upload(ctx, imagePath, uploader.UploadParams{
		PublicID:       imagePath,
		UniqueFilename: api.Bool(false),
		Overwrite:      api.Bool(true)})

	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.SecureURL)

}

func GetAssetInfo(cld *cloudinary.Cloudinary, ctx context.Context, imageInfo string) {
	resp, err := cld.Admin.Asset(ctx, admin.AssetParams{PublicID: imageInfo})

	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.SecureURL)
}
