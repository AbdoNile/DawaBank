resource "aws_route_table_association" "private-route-association1" {
  route_table_id = "${aws_route_table.private-network.id}"
  subnet_id      = "${aws_subnet.private1.id}"
}


resource "aws_route_table_association" "private-route-association2" {
  route_table_id = "${aws_route_table.private-network.id}"
  subnet_id      = "${aws_subnet.private2.id}"
}

resource "aws_route_table" "private-network" {
  vpc_id = "${aws_vpc.vpc.id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_nat_gateway.nat-gateway.id}"
  }
}
