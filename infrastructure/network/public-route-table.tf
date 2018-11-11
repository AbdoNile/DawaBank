resource "aws_route_table" "public-network" {
  vpc_id = "${aws_vpc.vpc.id}"
}

resource "aws_route" "public-traffic-to-internetgrateway" {
  route_table_id         = "${aws_route_table.public-network.id}"
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = "${aws_internet_gateway.InternetGateway.id}"
}
