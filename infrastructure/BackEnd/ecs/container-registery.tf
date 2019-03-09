
resource "aws_ecr_repository" "ecr" {
  name = "${lower(var.appName)}"
}
