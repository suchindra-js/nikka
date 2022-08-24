import { EmailOutlined, FacebookRounded } from "@mui/icons-material";
import { Box, Grid, Typography, Stack, Container } from "@mui/material";

export default function Header(): JSX.Element {
  return (
    <Box className="bg-black h-[20vh] flex justify-center items-center">
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Stack direction="row" spacing={5}>
              <Typography color="white" variant="body1">
                Exclusive Marketing Agent
              </Typography>
              <Typography color="white" variant="body1">
                Developer
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack spacing={4}>
              <Stack direction="row" spacing={3}>
                <Stack direction="row" spacing={1}>
                  <Typography color="white" variant="body1">
                    Follow us on
                  </Typography>
                  <FacebookRounded color="primary" />
                </Stack>
                <Stack direction="row" spacing={1}>
                  <EmailOutlined className="text-white" />
                  <Typography color="white" variant="body1">
                    enquiries@nikkacitysentral.com.my
                  </Typography>
                </Stack>
              </Stack>
              <Typography color="white" variant="body1" align="right">
                Nikkacitysentral © 2020
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
