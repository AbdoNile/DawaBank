
resource "aws_placement_group" "spread" {
  name     = "Spread Servers"
  strategy = "spread"
}
