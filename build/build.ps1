Push-Location
cd ..\dawabank\
#npm run build
Pop-Location
Push-Location
cd ..\infrastructure\Frontend
terraform init
terraform apply -auto-approve -var environment=qa 
$bucketName =  terraform output bucket-name
$bucketUri = "s3://" + $bucketName
Pop-Location
$relativePath = "..\dawabank\build";
aws s3 sync $relativePath $bucketUri
Write-Host "Done";