import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer(props) {
  return (
    <Grid container justify="center">
      <Box pt={2} pb={5}>
        <Typography
          align="center"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {"@2021 "}
          <Link href="https://www.biochem.mpg.de/cryoem" color="inherit">
            Cryo-EM Facility
          </Link>
          {", Max Planck Institute of Biochemistry"}
        </Typography>
      </Box>
    </Grid>
  );
}
