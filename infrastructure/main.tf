// I need a network
module "network" {
  source               = "./network"
  appName              = "${var.appName}"
  private1_subnet_cidr = "${var.private1_subnet_cidr}"
  private2_subnet_cidr = "${var.private2_subnet_cidr}"
  public1_subnet_cidr  = "${var.public1_subnet_cidr}"
  public2_subnet_cidr  = "${var.public2_subnet_cidr}"
  vpc_cidr             = "${var.vpc_cidr}"
  first_az             = "${var.first_az}"
  second_az            = "${var.second_az}"
}

// I need a cluster
module "project-ecs-cluster" {
  source = "./ecs"
  appName = "${var.appName}"
}