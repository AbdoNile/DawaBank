variable  "first_az"  {}
variable  "second_az"  {}
variable  "vpc_cidr"  {}
variable  "public1_subnet_cidr"  {}
variable  "public2_subnet_cidr"  {}
variable  "backend_subnet_cidr"  {}

resource "aws_vpc" "dawa" {
  cidr_block = "${var.vpc_cidr}"
  enable_dns_hostnames = "true"
  
  tags {
    Name = "Dawa VPC"
  }
}
resource "aws_placement_group" "spread" {
  name     = "Web Servers"
  strategy = "spread"
}
resource "aws_internet_gateway" "InternetGateway" {
  vpc_id = "${aws_vpc.dawa.id}"

  tags {
    Name = "Dawa IG"
  }
}

resource "aws_subnet" "public1" {
  availability_zone = "${var.first_az}"
  vpc_id            = "${aws_vpc.dawa.id}"
  cidr_block        = "${var.public1_subnet_cidr}"
  tags {
    Name = "Dawa Web Servers Subnet"
  }
}

resource "aws_subnet" "public2" {
  availability_zone = "${var.second_az}"
  vpc_id            = "${aws_vpc.dawa.id}"
  cidr_block        = "${var.public2_subnet_cidr}"
  tags {
    Name = "Dawa Web Servers Subnet"
  }
}


resource "aws_route_table_association" "route-association1" {
  route_table_id = "${aws_route_table.web.id}"
  subnet_id      = "${aws_subnet.public1.id}"
}


resource "aws_route_table_association" "route-association2" {
  route_table_id = "${aws_route_table.web.id}"
  subnet_id      = "${aws_subnet.public2.id}"
}

resource "aws_route_table" "web" {
  vpc_id = "${aws_vpc.dawa.id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.InternetGateway.id}"
  }
}

resource "aws_subnet" "private" {
  vpc_id            = "${aws_vpc.dawa.id}"
  cidr_block        = "${var.backend_subnet_cidr}"
  availability_zone = "${var.first_az}"
  tags {
    Name = "Dawa private Subnet"
  }
}
