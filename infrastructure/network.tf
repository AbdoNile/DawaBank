variable  "appName"  {}
variable  "first_az"  {}
variable  "second_az"  {}
variable  "vpc_cidr"  {}
variable  "public1_subnet_cidr"  {}
variable  "public2_subnet_cidr"  {}
variable  "private1_subnet_cidr"  {}

resource "aws_vpc" "vpc" {
  cidr_block = "${var.vpc_cidr}"
  enable_dns_hostnames = "true"
  
  tags {
    Name = "${var.appName} VPC"
  }
}
resource "aws_placement_group" "spread" {
  name     = "Spread Servers"
  strategy = "spread"
}
resource "aws_internet_gateway" "InternetGateway" {
  vpc_id = "${aws_vpc.vpc.id}"

  tags {
    Name = "${var.appName} IG"
  }
}

resource "aws_subnet" "public1" {
  availability_zone = "${var.first_az}"
  vpc_id            = "${aws_vpc.vpc.id}"
  cidr_block        = "${var.public1_subnet_cidr}"
  tags {
    Name = "${var.appName} Web Servers Subnet"
  }
}

resource "aws_subnet" "public2" {
  availability_zone = "${var.second_az}"
  vpc_id            = "${aws_vpc.vpc.id}"
  cidr_block        = "${var.public2_subnet_cidr}"
  tags {
    Name = "${var.appName} Web Servers Subnet"
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
  vpc_id = "${aws_vpc.vpc.id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.InternetGateway.id}"
  }
}

resource "aws_subnet" "private1" {
  vpc_id            = "${aws_vpc.vpc.id}"
  cidr_block        = "${var.private1_subnet_cidr}"
  availability_zone = "${var.first_az}"
  tags {
    Name = "${var.appName} 1st Private Subnet"
  }
}

resource "aws_subnet" "private2" {
  vpc_id            = "${aws_vpc.vpc.id}"
  cidr_block        = "${var.private1_subnet_cidr}"
  availability_zone = "${var.first_az}"
  tags {
    Name = "${var.appName} 2nd private Subnet"
  }
}
