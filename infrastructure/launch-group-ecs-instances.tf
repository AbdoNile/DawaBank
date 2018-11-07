resource "aws_launch_configuration" "ecs-instances" {
  image_id             = "ami-01b701d1a348a0d00"
  instance_type        = "t2.micro"
  name_prefix          = "ecs-instance-"
  key_name             = "Dawa"
  iam_instance_profile = "${aws_iam_instance_profile.ecsInstanceProfile.arn}"

  security_groups = [
    "${aws_security_group.localtraffic.id}",
  ]
}

resource "aws_autoscaling_group" "ecs-instances" {
  name                 = "ECS Instances Servers"
  max_size             = 2
  min_size             = 0
  desired_capacity     = 0
  placement_group      = "${aws_placement_group.spread.id}"
  launch_configuration = "${aws_launch_configuration.ecs-instances.id}"
  vpc_zone_identifier  = ["${aws_subnet.private1.id},${aws_subnet.private2.id}"]
}

resource "aws_iam_instance_profile" "ecsInstanceProfile" {
  name = "ecsInstanceProfile"
  role = "${aws_iam_role.ecsInstanceRole.name}"
}

data "aws_iam_policy_document" "trust-assume-role-policy" {
  statement {
    effect = "Allow"
    actions = [
      "ecs:DeregisterContainerInstance",
      "ecs:DiscoverPollEndpoint",
      "ecs:Poll",
      "ecs:RegisterContainerInstance",
      "ecs:StartTelemetrySession",
      "ecs:Submit*",
      "ecr:GetAuthorizationToken",
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
  }
}

resource "aws_iam_role" "ecsInstanceRole" {
  name               = "EcsInstanceRole"
  assume_role_policy = "${data.aws_iam_policy_document.trust-assume-role-policy.json}"
}
