resource "aws_route_table" "private-network" {
  vpc_id = "${aws_vpc.vpc.id}"
}

resource "aws_route" "public-traffic-to-nat" {
  route_table_id         = "${aws_route_table.private-network.id}"
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = "${aws_nat_gateway.nat-gateway.id}"
}
