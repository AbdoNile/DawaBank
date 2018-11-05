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
  name                 = "Web Servers"
  max_size             = 3
  min_size             = 2
  desired_capacity     = 2
  force_delete         = true
  placement_group      = "${aws_placement_group.spread.id}"
  launch_configuration = "${aws_launch_configuration.web-machine.id}"
  vpc_zone_identifier  = ["${aws_subnet.public1.id}", "${aws_subnet.public2.id}"]
  availability_zones   = ["${var.first_az}", "${var.second_az}"]

}

resource "aws_lb" "web" {
  name               = "web"
  load_balancer_type = "application"
  subnets            = ["${aws_subnet.public1.id}", "${aws_subnet.public2.id}"]

  tags {
    Name = "web"
  }
}

resource "aws_lb_listener" "selected443" {
  load_balancer_arn = "${aws_lb.web.arn}"
  port              = 80
  protocol          = "https"

  default_action {
    type             = "forward"
    target_group_arn = "${aws_autoscaling_group.webservers.arn}"
  }
}
