import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

const NewsCard = ({
  title,
  description,
  image,
  source,
  time,
  url,
  author
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: 3,
        boxShadow: 1,
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <CardActionArea
        component="a"
        href={url}
        target="_blank"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "stretch",
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: { sm: 180 },
            height: { xs: 200, sm: "auto" },
          }}
        />

        {/* Content */}
        <CardContent sx={{ flex: 1 }}>
          {/* Source + Time */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 1,
              color: "text.secondary",
              fontSize: 12,
            }}
          >
            <Typography variant="caption">{source}</Typography>
            <Typography variant="caption">•</Typography>
            <Typography variant="caption">{time}</Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;