<template>
  <div>
    <SectionHero />
    <SectionHowItWorks />
    <SectionReferences />
    <SectionWhy />
    <SectionBitcoinValue />
    <SectionCallToAction />
  </div>
</template>

<script>
import SectionHero from '@/components/sections/SectionHero'
import SectionHowItWorks from '@/components/sections/SectionHowItWorks'
import SectionReferences from '@/components/sections/SectionReferences'
import SectionWhy from '@/components/sections/SectionWhy'
import SectionBitcoinValue from '@/components/sections/SectionBitcoinValue'
import SectionCallToAction from '@/components/sections/SectionCallToAction'

export default {
  layout: "with-header",
  components: {
    SectionHero,
    SectionHowItWorks,
    SectionReferences,
    SectionWhy,
    SectionBitcoinValue,
    SectionCallToAction
  },
  head() {
    return {
      title: "NordikCoin – Buy Bitcoin in under 5 minutes",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "NordikCoin is run by a professional team of Bitcoin maximalists and technologists, based in beautiful Tallinn, Estonia. You can trust us with all your cryptocurrency."
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "NordikCoin, Bitcoin, cryptocurrency"
        }
      ]
    };
  }
};
</script>
