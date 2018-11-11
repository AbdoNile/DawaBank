variable "bastion-host-image" {
  default = "ami-050202fb72f001b47"
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.bastion-host.id}"
}

resource "aws_instance" "bastion-host" {
  ami           = "${var.bastion-host-image}"
  instance_type = "t2.micro"
  subnet_id     = "${aws_subnet.public1.id}"
  security_groups = [
    "${aws_security_group.bastion-host.id}",
  ]
  key_name = "Dawa"
  tags {
    "Name" = "Bastion Box"
  }
}

resource "aws_security_group" "bastion-host" {
  name   = "Bastion Host"
  vpc_id = "${aws_vpc.vpc.id}"

  ingress {
    from_port   = -1
    to_port     = -1
    protocol    = "icmp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3389
    to_port     = 3389
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Name = "Bastion SG"
  }
}