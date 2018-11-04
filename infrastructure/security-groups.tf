resource "aws_security_group" "admin" {
  name   = "Admin traffic"
  vpc_id = "${aws_vpc.dawa.id}"

  ingress {
    from_port   = -1
    to_port     = -1
    protocol    = "icmp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Name = "Admin SG"
  }
}

resource "aws_security_group" "web" {
  name   = "Web traffic"
  vpc_id = "${aws_vpc.dawa.id}"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

 
  tags {
    Name = "Web Server SG"
  }
}
