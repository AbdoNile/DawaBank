resource "aws_ecs_task_definition" "api" {
  family = "${var.appName}-api" 
   
  container_definitions = <<EOF
[
  {
    "name": "api",
    "image": "service-first",
    "cpu": 10,
    "memory": 512,
    "network": "awsvpc",
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
    name = "service-storage"
  }

 
}
