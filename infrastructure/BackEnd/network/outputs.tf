

output "vpc-id" {
  value = "${aws_vpc.vpc.id}"
}

output "vpc-cidr" {
    value = "${aws_vpc.vpc.cidr_block}"
}

output "private-subnet-1-id" {
  value = "${aws_subnet.private1.id}"
}


output "private-subnet-2-id" {
  value = "${aws_subnet.private2.id}"
}


output "public-subnet-1-id" {
  value = "${aws_subnet.public1.id}"
}


output "public-subnet-2-id" {
  value = "${aws_subnet.public2.id}"
}