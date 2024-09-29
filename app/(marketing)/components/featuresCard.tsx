import * as React from "react"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import ExtensionIcon from "@mui/icons-material/Extension"
import MemoryIcon from "@mui/icons-material/Memory"
import MinorCrashIcon from "@mui/icons-material/MinorCrash"
import TroubleshootIcon from "@mui/icons-material/Troubleshoot"
import WarningIcon from "@mui/icons-material/Warning"
import { SvgIconClassKey } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Icon from "@mui/material/Icon"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"

interface MediaCardProps {
  picPath: any
  title: string
  description: string
}

const FeatureCardGroup = () => {
  const content = [
    {
      picPath: ExtensionIcon,
      title: "Integrated with reel",
      description:
        "reelSearch's seamless integration provides powerful insights all within the reel website",
    },
    {
      picPath: TroubleshootIcon,
      title: "Understand The Competition",
      description:
        "Real-time and historical vehicle comparisons provide market dominating listing strategies.",
    },
    {
      picPath: WarningIcon,
      title: "Respond Rapidly",
      description:
        "Stay ahead with insights you need to rapidly adapt to ever changing markets.",
    },
    {
      picPath: CurrencyExchangeIcon,
      title: "Grow Your Business",
      description:
        "Leverage reelSearch Fleets to expand your reel co-hosting empire by listing cars, finding co-hosts, and using market data for strategic fleet growth",
    },
    {
      picPath: MinorCrashIcon,
      title: "Community Support",
      description:
        "Join reelSearch's expanding collaborative reel host community to strategize and grow.",
    },
    {
      picPath: MemoryIcon,

      title: "New: reelSearch AI Assistant", //oh

      description:
        "Receive data driven AI suggestions for: vehicle purchases, business operations, listing settings, etc.", //*/{grid h-96 grid-cols-3 gap-20 px-8 }*/
    },
  ]

  const FeatureCard: React.FC<MediaCardProps> = ({
    picPath,
    title,
    description,
  }) => {
    return (
      <Card className="flex w-auto grow bg-slate-100 !shadow-lg !shadow-blue-500/50 sm:h-full sm:w-full ">
        <CardMedia
          component="div"
          sx={{ height: 80, paddingTop: 2, paddingLeft: "10px" }}
        >
          <Icon component={picPath} className="text-base lg:text-lg" />{" "}
          {/* Adjust fontSize as needed */}
        </CardMedia>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              className="text-left text-lg lg:text-xl "
            >
              {title}
            </Typography>
            <Typography
              color="text.secondary"
              component="div"
              fontSize={16}
              align={"left"}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    )
  }

  return (
    <div className="grid h-auto gap-2 px-8 sm:grid-cols-1 sm:gap-4 lg:grid-cols-3 lg:gap-10 ">
      {content.map((item) => (
        <FeatureCard
          picPath={item.picPath}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default FeatureCardGroup
