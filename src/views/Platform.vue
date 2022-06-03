<template>
  <div class="about-page mobile-only">
    <div class="page-header">
      <p class="page-header-text">PARTY PLATFORM</p>
    </div>
  </div>
  <!-- Leave a margin for the background -->
  <div class="page-description-box mobile-only" style="margin-top: 275px;">
    <p class="page-description-large-text">
      In our vision, Quebec is a province where all can reach their full human potential and have a healthy environment
      for the future.
    </p>
  </div>

  <div class="about-page desktop-only" style="height: 100vh;">
    <div class="page-description-box desktop-only"
      style="margin-top: 50vh; margin-left: 20px; width: 500px; max-height: 50vh;">
      <p class="principle-title" style="margin-bottom: 10px;">PARTY PLATFORM</p>
      <p class="page-description-large-text" style="text-align: left;">
        In our vision, Quebec is a province where all can reach their full human potential and have a healthy
        environment
        for the future.
      </p>
    </div>
  </div>

  <div class="page-minor-header mobile-only" style="background-color: rgba(241, 234, 249, 0.97);">
    <p class="page-minor-header-text" style="font-weight: 700;">
      KEY PROPOSALS
    </p>
  </div>

  <div class="mobile-only">
    <div style="background-color: white; display: flex; flex-direction: column;">
      <!-- UBI -->
      <details id="UBI">
        <summary>
          <p class="page-header-text">UNIVERSAL BASIC INCOME (UBI)</p>
          <span class="icon"><img src="@/assets/to_expand.svg" alt="Indicator for expansion"></span>
        </summary>
        <img class="platform-img" :src="require('@/assets/robot handshake.jpg')" alt="Handshake">
        <div class="page-description-box">
          <p class="page-description-text">UBI will soon become a necessity due to automation. With more advancements in
            AI, employers are incentivized to replace their human workers to reduce labor costs.</p>
        </div>
        <iframe width="100%" height="315" style="padding: 10px;" src="https://www.youtube.com/embed/kl39KHS07Xc"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <div class="page-description-box">
          <p class="page-description-text">Our response shall not be a blanket ban on the use of technology. The future
            of
            work will be re-imagined as a voluntary endeavor instead of economic desperation.
            <br>
            <br>
            At $1200 / month per adult, this is not enough to live lavishly. But it will be a safety cushion. In line
            with
            individual freedom, no strings are attached to UBI, unlike current welfare. No employment conditions.
            <br>
            <br>
            According to <a href="https://www.ubiworks.ca/qc">UBI Works</a>, Quebec’s economy can grow by $17G a year
            and
            add 128k jobs. At a time of pandemic
            woes, this will give people more spending power and a better incentive to find fulfilling jobs. People can
            also take on more risks in their life. Start a business, knowing that your back is covered!
            <br>
            <br>
            UBI is expensive. For 7 million adults, the cost is $100G per year. UBI will replace the current welfare
            system and disability recipients will get their funds matched upward. We plan to fund UBI in Quebec via a
            combination of tax increases, corporate subsidy cuts and deficit spending. It is a redistribution of wealth
            aimed at poverty elimination.
            Indirectly, UBI will reduce costs in health care and criminal justice.
          </p>
        </div>
      </details>
      <!-- Language -->
      <details id="language">
        <summary>
          <p class="page-header-text">LANGUAGE FREEDOM</p>
          <span class="icon"><img src="@/assets/to_expand.svg" alt="Indicator for expansion"></span>
        </summary>
        <img class="platform-img" :src="require('@/assets/language expression.jpg')"
          alt="People happy with speech bubbles">
        <div class="page-description-box">
          <p class="page-description-text">
            Language freedom means the freedom to choose the language you want without reprisal from the government. It
            is
            a consequence of freedom of speech.
            <br>
            <br>
            Freedom of speech is important because it allows us to express ourselves in honesty. Free speech is the
            bedrock of democracy. Freedom gives value to our choices.
            <br>
            <br>
            In Quebec, freedom of speech is missing. Language laws and religion bans have suspended our freedom. Bill
            101
            prohibits attending English schools based on parental lineage, forces French as the language of business and
            restricts government services to be only in French. Regulating language is authoritarian. We believe people
            have the right to choose the languages of their lives. Our UBI proposal wouldn’t be an actual income if Bill
            101
            forces most of it to be spent in French.
            <br>
            <br>
            Bill 101 is put in the name of protecting and promoting French, at the expense of freedom. We believe
            freedom
            should always come first before cultural anxieties. If Quebec culture needs protection by suspending free
            speech, Quebec culture cannot survive in a free society. A culture that requires coercion to survive is not
            worthy of a democracy.
            <br>
            <br>
            After almost 50 years of censorship, Quebec is still considering more restrictions. Meanwhile, more and more
            people are attracted by foreign cultures from the US and even South Korea. We believe that an open
            competitive
            cultural landscape is beneficial. Quebec culture will flourish if people engage with it on their own terms,
            without pressure from the government. Bill 101 is holding Quebec from developing a culture that is actually
            interesting.
          </p>
        </div>
      </details>
      <!-- Climate change -->
      <details id="climate">
        <summary>
          <p class="page-header-text">CLIMATE CHANGE</p>
          <span class="icon"><img src="@/assets/to_expand.svg" alt="Indicator for expansion"></span>
        </summary>
        <img class="platform-img" :src="require('@/assets/earth melting.jpg')" alt="The Earth is melting">
        <div class="page-description-box">
          <p class="page-description-text">
            Climate change is the defining issue of the 21st century. The IPCC has declared “code red” for humanity and
            we
            must act now.
            <br>
            <br>
            Quebec’s greehouse gas emissions do not represent a signficant part of the world. However, as a rich
            first-world society, we must bear greater responsibility because we are more capable of action.
            <br>
            <br>
            Climate change is solved through a concert of policies. This begins with setting a proper emissions target
            for
            Quebec. With respect to climate justice and the 2015 Paris accord, Quebec has to reduce emissions by 60%
            domestically and by 118% internationally by 2030, compared to 1990 levels. The current target by the CAQ is
            37.5% and we aren’t even on track to achieve it. Emission targets are not political targets. They are
            scientific targets. It is better to face the truth than to meet a weak target.
            <br>
            <br>
            To achieve a domestic reduction of 60%, Quebec needs a variety of measures. Densify human settlements.
            Improve
            public transportation within and between cities. Retrofit buildings with energy efficient solutions. And
            more.
            <br>
            <br>
            To achieve the international reduction of 118%, Quebec needs to fund green infrastructure in developing
            countries and provide technology transfer. As a Canadian province, Quebec should pressure Canada to phase
            out
            fossil fuels. We must not start fossil fuel industries in Quebec.
            <br>
            <br>
            Our current technology is not good enough. Climate change and technology transfer require innovation. Our
            scientists cannot think clearly if speaking English is treated like a sin by Bill 101. We must let go of
            xenophobia to attract the best talent on Earth and to develop the intellectual curiosity needed to meet the
            climate challenge.
          </p>
        </div>
      </details>
      <div class="page-header" style="margin-top: 0; background: rgb(178, 178, 178);">
        <p class="page-header-text" style="color: black;">POLICIES BY TOPIC</p>
      </div>
      <ul style="display: flex; flex-direction: column;">
        <li @click="clickTopic('pandemic')" style="display: flex; flex-direction: row; margin-top: 10px;">
          <div style="display: flex; width: 50px;"><img style="margin: auto;"
              :src="require('@/assets/carbon_coronavirus.svg')" alt="COVID Virus"></div>
          <span class="topic-title">COVID-19 Pandemic</span>
        </li>
        <p ref="pandemic" class="page-description-text hidden-description">
          Maintain the integrity of our healthcare network. Guarantee as much freedom as possible.
          <br>
          <br>
          <router-link to="/platform-detailed#pandemic" class="call-to-action-button">
            <p class="call-to-action-button-text">LEARN MORE</p>
          </router-link>
        </p>
        <li @click="clickTopic('economy')" style="display: flex; flex-direction: row;">
          <div style="display: flex; width: 50px;"><img style="margin: auto;" :src="require('@/assets/money.svg')"
              alt="Banknote">
          </div>
          <span class="topic-title">Economy</span>
        </li>
        <p ref="economy" class="page-description-text hidden-description">
          Recover from COVID in a fair and equitable way. Facilitate free entreprise.
          Create opportunities.
          <br>
          <br>
          <router-link to="/platform-detailed#economy" class="call-to-action-button">
            <p class="call-to-action-button-text">LEARN MORE</p>
          </router-link>
        </p>
        <li @click="clickTopic('society')" style="display: flex; flex-direction: row;">
          <div style="display: flex; width: 50px;"><img style="margin: auto;" :src="require('@/assets/justice.svg')"
              alt="Scale">
          </div>
          <span class="topic-title">Society</span>
        </li>
        <p ref="society" class="page-description-text hidden-description">
          Fight systemic racism. Support our LGBTQ+. Uphold freedom of religion and speech. No more Bill 21 & 101.
          <br>
          <br>
          <router-link to="/platform-detailed#society" class="call-to-action-button">
            <p class="call-to-action-button-text">LEARN MORE</p>
          </router-link>
        </p>
        <li @click="clickTopic('culture')" style="display: flex; flex-direction: row;">
          <div style="display: flex; width: 50px;"><img style="margin: auto;" :src="require('@/assets/palette.svg')"
              alt="Palette paint">
          </div>
          <span class="topic-title">Culture</span>
        </li>
        <p ref="culture" class="page-description-text hidden-description">
          Embrace multiculturalism. Fund our social media creators. Empower the individual.
          <br>
          <br>
          <router-link to="/platform-detailed#culture" class="call-to-action-button">
            <p class="call-to-action-button-text">LEARN MORE</p>
          </router-link>
        </p>
        <li @click="clickTopic('environment')" style="display: flex; flex-direction: row;">
          <div style="display: flex; width: 50px;"><img style="margin: auto;" :src="require('@/assets/thermostat.svg')"
              alt="Thermostat">
          </div>
          <span class="topic-title">Environment</span>
        </li>
        <p ref="environment" class="page-description-text hidden-description">
          Reduce our emissions ASAP as required by the Paris accord. Prepare for natural disasters. Invest in
          innovation.
          <br>
          <br>
          <router-link to="/platform-detailed#environment" class="call-to-action-button">
            <p class="call-to-action-button-text">LEARN MORE</p>
          </router-link>
        </p>
        <li @click="clickTopic('relations')" style="display: flex; flex-direction: row;">
          <div style="display: flex; width: 50px;"><img style="margin: auto;" :src="require('@/assets/globe.svg')"
              alt="Globe">
          </div>
          <span class="topic-title">Out-of-Province Relations</span>
        </li>
        <p ref="relations" class="page-description-text hidden-description">
          Remain in Canada. Give immigration back to the federal
          government. Shut down Quebec “embassies” abroad.
          <br>
          <br>
          <router-link to="/platform-detailed#relations" class="call-to-action-button">
            <p class="call-to-action-button-text">LEARN MORE</p>
          </router-link>
        </p>
      </ul>
    </div>
  </div>

  <!-- Proposals -->
  <div class="desktop-only">
    <div class="about-page"
      style="height: 100vh; background-color: white; display: flex; flex-direction: row; position: relative;">
      <div class="" style="flex: 40%; margin-top: 20vh; margin-left: 10vh;">
        <p class="principle-title" style="text-align: left;">UNIVERSAL BASIC INCOME (UBI)</p>
        <p class="page-description-text">Automation, end of poverty, financial freedom, entrepreneurship. <br><br> A
          move
          of the
          21st century.</p>
      </div>
      <div style="flex: 60%; margin-top: 15vh; margin-left: 10vh;">
        <div style="background-color: #8F60DC; max-width: 400px;">
          <img :src="require('@/assets/robot handshake.jpg')" alt="Robot handshake" style="max-height: 370px; max-width: 375px;
          position: relative; top: -30px; left: -30px;
          filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/about-page.scss";

details {
  user-select: none;
}

details>summary span.icon {
  transition: all 0.3s;
  margin-top: auto;
}

details[open] summary span.icon {
  transform: rotate(180deg);
}

summary {
  display: flex;
  cursor: pointer;

  background: rgba(143, 96, 220);
  height: 112px;

  margin-bottom: 10px;
}

summary::-webkit-details-marker {
  display: none;
}

.platform-img {
  object-fit: cover;
  height: 300px;
  width: 100%;
}


.topic-title {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  margin: auto;

  padding: 10px;
}

.topic-title:hover {
  cursor: pointer;
}

.hidden-description {
  display: none;
  transition: all 0.3s;

  padding: 10px;
}

.mobile-only {
  @media only screen and (min-width: 701px) {
    display: none;
  }
}

.desktop-only {
  @media only screen and (max-width: 700px) {
    display: none;
  }
}

// DESKTOP SPECIFIC
</style>
<style lang="scss">
.platform-background {
  background-image: url("~@/assets/tech meeting flipped.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 85% 100%;

  z-index: -1;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Platform extends Vue {
  mounted(): void {
    // signature background
    const background = document.body;
    background?.classList.add("platform-background");
  }

  unmounted(): void {
    // signature background
    const background = document.body;
    background?.classList.remove("platform-background");
  }

  // expand or collapse the description
  clickTopic(topic_id: string): void {
    var description = this.$refs[topic_id] as HTMLElement;
    if (description.style.display == "none" || description.style.display == "") {
      description.style.display = "block";
    }
    else {
      description.style.display = "none";
    }
  }
}
</script>