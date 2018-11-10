resource "aws_iam_role" "ecsInstanceRole" {
  name = "EcsInstanceRole"

  assume_role_policy = <<EOF
{
"Version": "2012-10-17",
"Statement": [
    {
    "Action": "sts:AssumeRole",
    "Principal": {
        "Service": "ec2.amazonaws.com"
    },
    "Effect": "Allow",
    "Sid": ""
    }
]
}
EOF

  
}

resource "aws_iam_role_policy_attachment" "attachEC2Policy" {
    policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
    role = "${aws_iam_role.ecsInstanceRole.name}"
}


