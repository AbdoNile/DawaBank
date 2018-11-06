
resource "aws_launch_configuration" "worker-machine" {
  image_id      = "${var.linux_image}"
  instance_type = "t2.micro"
  name_prefix   = "dawa-backend-server-"
  key_name      = "Dawa"
  security_groups = [
    "${aws_security_group.localtraffic.id}",
  ]
}



resource "aws_autoscaling_group" "machines" {
  name                      = "Machine Servers"
  max_size                  = 5
  min_size                  = 2
  desired_capacity          = 2
  placement_group           = "${aws_placement_group.spread.id}"
  launch_configuration      = "${aws_launch_configuration.worker-machine.id}"
  vpc_zone_identifier       = ["${aws_subnet.private1.id},${aws_subnet.private2.id}"]
  

}

