resource "aws_lb" "web" {
  name               = "web"
  load_balancer_type = "application"
  subnets            = ["${module.network.public-subnet-1-id}", "${module.network.public-subnet-2-id}"]

  tags {
    Name = "Web traffic Lb"
  }
}

resource "aws_lb_target_group" "webservers" {
  port     = 80
  protocol = "HTTP"
  name = "webservers"
  lifecycle {
    create_before_destroy = true
  }

  vpc_id = "${module.network.vpc-id}"
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