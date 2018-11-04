resource "aws_eip" "ip" {
  instance = "${aws_instance.webserver.id}"
}

resource "aws_instance" "webserver" {
  ami           = "ami-01b701d1a348a0d00"
  instance_type = "t2.micro"
  subnet_id     = "${aws_subnet.web.id}"
  security_groups = [
    "${aws_security_group.admin.id}", 
    "${aws_security_group.web.id}"
  ]
  key_name = "Dawa"
  tags {
    "Name" = "Dawa Web Server"
  }
}

resource "aws_instance" "nservicebus" {
  ami           = "ami-01b701d1a348a0d00"
  instance_type = "t2.micro"
  subnet_id     = "${aws_subnet.backend.id}"
  key_name = "Dawa"
  tags {
    "Name" = "Dawa BackEnd Server"
  }
}
