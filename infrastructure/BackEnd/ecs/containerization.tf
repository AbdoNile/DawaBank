
  


resource "aws_ecs_cluster" "ecs-preprod" {
  name = "${var.appName}-preprod"
  
}


