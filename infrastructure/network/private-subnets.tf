
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
  cidr_block        = "${var.private2_subnet_cidr}"
  availability_zone = "${var.first_az}"
  tags {
    Name = "${var.appName} 2nd private Subnet"
  }
}


resource "aws_eip" "nat-eip" {

}

resource "aws_nat_gateway" "nat-gateway" {
    allocation_id = "${aws_eip.nat-eip.id}"
    subnet_id = "${aws_subnet.public1.id}"
}