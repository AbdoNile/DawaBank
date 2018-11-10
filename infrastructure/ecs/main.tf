variable "appName" { }


output "iam-role-for-ecsInstances-name" {
  value = "${aws_iam_role.ecsInstanceRole.name}"
}

output "cluster-name" {
  value = "${aws_ecs_cluster.ecs-preprod.name}"
}