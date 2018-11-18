$scriptpath = $MyInvocation.MyCommand.Path
$dir = Split-Path $scriptpath
cd $dir
$env:GENERATE_SOURCEMAP="false";
$srcPath = "..\dawabank\build";
Remove-Item $srcPath -Recurse -ErrorAction Ignore
md $srcPath
Push-Location
cd ..\dawabank\
npm run build
Pop-Location
Push-Location
cd ..\infrastructure\Frontend
terraform init
terraform apply -auto-approve -var environment=qa 
$bucketName =  terraform output bucket-name
$bucketUri = "s3://" + $bucketName
Pop-Location
aws s3 sync $srcPath $bucketUri
Write-Host "Done";