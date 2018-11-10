variable "appName" { }


output "iam-role-for-ecsInstances-name" {
  value = "${aws_iam_role.ecsInstanceRole.name}"
}