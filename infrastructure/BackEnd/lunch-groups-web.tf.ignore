resource "aws_launch_configuration" "web-machine" {
  image_id      = "${var.windows_image}"
  instance_type = "t2.micro"
  name_prefix   = "dawa-web-server-"
  key_name      = "Dawa"

  security_groups = [
    "${aws_security_group.admin.id}",
    "${aws_security_group.web.id}",
    "${aws_security_group.localtraffic.id}",
  ]
}

resource "aws_autoscaling_group" "webservers" {
  name                 = "webservers"
  max_size             = 0
  min_size             = 0
  desired_capacity     = 0
  placement_group      = "${aws_placement_group.spread.id}"
  launch_configuration = "${aws_launch_configuration.web-machine.id}"
  vpc_zone_identifier  = ["${aws_subnet.public1.id}", "${aws_subnet.public2.id}"]
}

resource "aws_lb" "web" {
  name               = "web"
  load_balancer_type = "application"
  subnets            = ["${aws_subnet.public1.id}", "${aws_subnet.public2.id}"]

  tags {
    Name = "Web traffic Lb"
  }
}

resource "aws_lb_target_group" "webservers" {
  port     = 80
  protocol = "HTTP"
  name_prefix = "web-"
  lifecycle {
    create_before_destroy = true
  }

  vpc_id = "${aws_vpc.vpc.id}"
}

resource "aws_autoscaling_attachment" "webserver_attachement" {
  alb_target_group_arn   = "${aws_lb_target_group.webservers.arn}"
  autoscaling_group_name = "${aws_autoscaling_group.webservers.name}"
}

resource "aws_lb_listener" "web" {
  load_balancer_arn = "${aws_lb.web.arn}"
  port              = 80
  protocol          = "HTTP"
  
  lifecycle {
    create_before_destroy = true
  }

  default_action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.webservers.arn}"
  }
}
