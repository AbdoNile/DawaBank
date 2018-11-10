
  

resource "aws_ecr_repository" "ecr" {
  name = "${lower(var.appName)}"
}


resource "aws_ecs_cluster" "ecs-preprod" {
  name = "${var.appName}-preprod"
  
}


