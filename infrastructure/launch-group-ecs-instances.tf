

resource "aws_launch_configuration" "ecs-instances" {
  image_id             = "ami-01b701d1a348a0d00"
  instance_type        = "t2.micro"
  name_prefix          = "ecs-instance-"
  key_name             = "${var.appName}"
  iam_instance_profile = "${aws_iam_instance_profile.ecsInstanceProfile.arn}"
 user_data = <<EOF
 <powershell>
Initialize-ECSAgent -Cluster ${module.project-ecs-cluster.cluster-name} -EnableTaskIAMRole -LoggingDrivers '["json-file","awslogs"]'
</powershell>
 EOF
  security_groups = [
    "${aws_security_group.localtraffic.id}",
  ]
  lifecycle { create_before_destroy = true }
}

resource "aws_autoscaling_group" "ecs-instances" {
  name                 = "ECS Instances Servers"
  max_size             = 2
  min_size             = 0
  desired_capacity     = 2
  placement_group      = "${aws_placement_group.spread.id}"
  launch_configuration = "${aws_launch_configuration.ecs-instances.id}"
  vpc_zone_identifier  = ["${module.network.private-subnet-1-id}","${module.network.private-subnet-2-id}"]
  lifecycle { create_before_destroy = true }
}

resource "aws_iam_instance_profile" "ecsInstanceProfile" {
  name = "ecsInstanceProfile"
  role = "${module.project-ecs-cluster.iam-role-for-ecsInstances-name}"
}



