variable "api-image-name" {
  default = "101584550521.dkr.ecr.us-east-1.amazonaws.com/axetay:2236"
}

variable "target-cluster-name" {
  default = "Dawa-preprod"
}


data "aws_ecs_cluster" "target-cluster" {
  cluster_name = "${var.target-cluster-name}"
}


data "aws_lb_target_group" "webservers" {
  name = "webservers"
}


resource "aws_ecs_task_definition" "api-taskdefinition" {
  family = "api" 
   
  container_definitions = <<EOF
[
  {
    "name": "api",
    "image": "${var.api-image-name}",
    "cpu": 10,
    "memory": 512,
    "essential": true,
    "portMappings": [
      {
        "containerPort": 80
      }
    ]
  }
]
EOF
  volume {
    name = "api-storage"
  }
}


resource "aws_ecs_service" "api-service" {
  name = "api-application"
  cluster = "${data.aws_ecs_cluster.target-cluster.id}"
  task_definition = "${aws_ecs_task_definition.api-taskdefinition.arn}"
  desired_count = 2
  load_balancer {
      target_group_arn = "${data.aws_lb_target_group.webservers.arn}"
      container_name = "api"
      container_port = "80"
  }
}
