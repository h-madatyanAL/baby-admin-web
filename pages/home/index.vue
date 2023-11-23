<template>
  <div class="home-page">
    <div class="d-flex flex-column">
      <div class="first-row d-flex">
        <div class="first-row__first-col">
          <div class="home-page__title">目前已銷售裝置</div>
          <div class="first-row__first-col--box">
            <div
              v-for="(item, i) in chartInfo"
              :key="`item__${i}`"
              class="pb-2 first-row__first-col--box__wrapper"
            >
              <div class="first-row__first-col--box__wrapper__title">
                {{ item.title }}
              </div>
              <div class="first-row__first-col--box__wrapper__count">
                {{ item.value }}
              </div>
              <div class="first-row__first-col--box__wrapper__percent">
                {{ item.percent }}
              </div>
            </div>
          </div>
        </div>
        <div class="first-row__second-col">
          <div class="first-row__second-col--box">
            <multilineChart
              :showTopLabels="false"
              :showYLabels="false"
              :bottomLabels="[
                '10.10 (一)',
                '10.11 (二)',
                '10.13 (三)',
                '10.14 (四)',
                '10.15 (五)',
                '10.16 (六)',
                '10.17 (日)',
              ]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column">
      <div class="second-row d-flex">
        <div class="second-row__first-col">
          <div class="home-page__title">機台連線裝況</div>
          <div
            class="second-row__first-col--box d-flex flex-column justify-space-between"
          >
            <div
              class="second-row__first-col--box__first-row d-flex justify-space-between pt-10"
            >
              <div
                class="second-row__first-col--box__first-row--left d-flex flex-column align-center"
              >
                <h4>成功連線</h4>
                <h3>2,82</h3>
                <h5>(1分鐘前)</h5>
              </div>
              <div class="divider"></div>
              <div
                class="second-row__first-col--box__first-row--right d-flex flex-column align-center"
              >
                <h4>裝置已離線</h4>
                <h3>12</h3>
                <h5>(1分鐘前)</h5>
              </div>
            </div>
            <div class="second-row__first-col--box__second-row">
              <stackbleChart
                :showTopLabels="false"
                :height="130"
                :barsWidth="14"
              />
            </div>
          </div>
        </div>
        <div class="second-row__second-col">
          <div class="home-page__title">當日新增的裝置</div>
          <div class="d-flex second-row__second-col--container">
            <div
              class="second-row__second-col--custom-row d-flex flex-column justify-space-between"
            >
              <div
                class="second-row__second-col--custom-row__first-row d-flex flex-column align-start px-5 py-6"
              >
                <h4>藍芽連線版</h4>
                <h3>2,802</h3>
                <h5>
                  <span class="mr-2">+51</span
                  ><span
                    ><img src="@/assets/images/home_icon_grow.svg" alt="arrow"
                  /></span>
                </h5>
              </div>
              <div class="second-row__second-col--custom-row__second-row">
                <img
                  src="@/assets/images/first_bottom.svg"
                  alt="first"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div
              class="second-row__second-col--custom-row d-flex flex-column justify-space-between"
            >
              <div
                class="second-row__second-col--custom-row__first-row d-flex flex-column align-start px-5 py-6"
              >
                <h4>藍芽廣播版</h4>
                <h3>501</h3>
                <h5>
                  <span class="mr-2">+20</span
                  ><span
                    ><img src="@/assets/images/home_icon_grow.svg" alt="arrow"
                  /></span>
                </h5>
              </div>
              <div class="second-row__second-col--custom-row__second-row">
                <img
                  src="@/assets/images/second_bottom.svg"
                  alt="first"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div
              class="second-row__second-col--custom-row d-flex flex-column justify-space-between"
            >
              <div
                class="second-row__second-col--custom-row__first-row d-flex flex-column align-start px-5 py-6"
              >
                <h4>Wi-Fi版</h4>
                <h3>12,092</h3>
                <h5>
                  <span class="mr-2">+300</span
                  ><span
                    ><img src="@/assets/images/home_icon_grow.svg" alt="arrow"
                  /></span>
                </h5>
              </div>
              <div class="second-row__second-col--custom-row__second-row">
                <img
                  src="@/assets/images/third_bottom.svg"
                  alt="first"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column">
      <div class="third-row d-flex">
        <div class="third-row__first-col">
          <div class="home-page__title-space">當日睡眠狀況統計</div>
          <div
            class="third-row__first-col--box d-flex flex-column justify-space-between"
          >
            <div
              class="third-row__first-col--box__first-row d-flex justify-space-between px-13 pt-8"
            >
              <div
                class="third-row__first-col--box__first-row--first d-flex flex-column align-center"
              >
                <h4>成功連線</h4>
                <h3>2,82</h3>
                <h5>(1分鐘前)</h5>
              </div>
              <div class="divider"></div>
              <div
                class="third-row__first-col--box__first-row--second d-flex flex-column align-center"
              >
                <h4>裝置已離線</h4>
                <h3>12</h3>
                <h5>(1分鐘前)</h5>
              </div>
              <div class="divider"></div>
              <div
                class="third-row__first-col--box__first-row--third d-flex flex-column align-center"
              >
                <h4>裝置已離線</h4>
                <h3>12</h3>
                <h5>(1分鐘前)</h5>
              </div>
            </div>
            <div class="third-row__first-col--box__second-row">
              <barAndLineChart :showTopLabels="false" :height="220" />
            </div>
          </div>
        </div>
        <div class="third-row__second-col">
          <div class="home-page__title-space">當日體動狀況統計</div>
          <div
            class="third-row__second-col--container d-flex flex-column align-center justify-space-between"
          >
            <div
              class="third-row__second-col--custom-row d-flex justify-space-around px-5 py-6"
            >
              <div>
                <radialProgress :contentData="4" :contentDataMax="7" />
              </div>
              <div class="d-flex flex-column">
                <h4 class="mb-2">體動異常</h4>
                <h3 class="mb-2">4 筆</h3>
                <h5>(來自3台裝置)</h5>
              </div>
            </div>
            <div
              class="third-row__second-col--custom-row d-flex justify-space-around px-5 py-6"
            >
              <div class="blue-progress">
                <radialProgress :contentData="23" :contentDataMax="50" />
              </div>
              <div class="d-flex flex-column">
                <h4 class="mb-2">平均體動</h4>
                <h3 class="mb-2">23</h3>
                <h5>(bpm)</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import multilineChart from "../../components/charts/multipleLineChart.vue";
import doubleBarChart from "../../components/charts/doubleBarChart.vue";
import barAndLineChart from "../../components/charts/barAndLineChart.vue";
import stackbleChart from "../../components/charts/stackbleChart.vue";
import radialProgress from "../../components/charts/radialProgress.vue";

export default {
  name: "home-page",
  components: {
    multilineChart,
    doubleBarChart,
    barAndLineChart,
    stackbleChart,
    radialProgress,
  },
  data() {
    return {
      chartInfo: [
        { title: "最新一週", value: "200", percent: "(+13%)" },
        { title: "最新一月", value: "9.307", percent: "(+2%)" },
        { title: "最新一年", value: "1.328", percent: "(+5%)" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  padding-bottom: 50px;
  &__title,
  &__title-space {
    white-space: nowrap;
    font-weight: 700;
    font-size: 16px;
    padding-bottom: 20px;
    color: $gray;
  }
  &__title-space {
    white-space: nowrap;
    padding-bottom: 40px !important;
  }
}

.first-row {
  width: 100%;
  gap: 11px;
  align-items: flex-end;
  &__first-col {
    width: 20%;
    &--box {
      height: 312px;
      box-shadow: 0px 2px 4px #00000029;
      background-color: #4a8ef5;
      padding: 20px 36px;

      &__wrapper {
        padding: 2px 0px;
        &__title {
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
        }
        &__count {
          font-weight: 600;
          font-size: 30px;
          color: $white;
          line-height: 36px;
        }
        &__percent {
          color: $white;
        }
      }
    }
  }
  &__second-col {
    width: 80%;
    &--box {
      height: 312px;
      box-shadow: 0px 2px 4px #00000029;
      background-color: $white;
    }
  }
  @media only screen and (max-width: 850px) {
    &__first-col {
      width: 100%;
    }
    &__second-col {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 850px) {
  .first-row {
    flex-direction: column;
  }
}
.second-row {
  gap: 60px;
  margin-top: 32px;
  &__first-col {
    width: 100%;
    &--box {
      box-shadow: 0px 2px 4px #00000029;
      background-color: $white;
      height: 296px;
      display: flex;
      padding: 5px 25px 15px 25px;
      &__first-row {
        color: #656565;
        padding: 8px 80px;
      }
    }
  }
  &__second-col {
    width: 100%;
    &--custom-row {
      width: 100%;
      box-shadow: 0px 2px 4px #00000029;
      background-color: $white;
      &__first-row {
        color: #656565;
      }
      &__first-row h4,
      h5 {
        white-space: nowrap;
      }
      // img {
      //   // will be changed
      //   margin-top: 7px;
      // }
    }
    &--container {
      height: 296px;
      width: 100%;
      gap: 20px;
    }
  }
  @media only screen and (max-width: 1924px) and (min-width: 600px) {
    &__first-col {
      min-width: 400px;
      max-width: 900px;
    }
  }
}
@media only screen and (max-width: 1140px) {
  .second-row {
    flex-direction: column;
  }
  .second-row__first-col {
    width: 100%;
  }
  .second-row__second-col {
    width: 100%;
  }
}
.third-row {
  gap: 42px;
  margin-top: 32px;
  &__first-col {
    width: 55%;
    height: 100%;
    &--box {
      height: 363px;
      box-shadow: 0px 2px 4px #00000029;
      background-color: $white;
      display: flex;
      flex-direction: column-reverse;
      padding: 5px 10px;
      &__first-row {
        color: #656565;
      }
    }
  }
  &__second-col {
    width: 45%;
    &--container {
      gap: 20px;
      height: 363px;
      width: 100%;
    }
    &--custom-row {
      align-items: center;
      width: 100%;
      height: 100%;
      box-shadow: 0px 2px 4px #00000029;
      background-color: $white;
      gap: 100px;
      color: #656565;
    }
    &--custom-row div {
      width: 20%;
    }
    &--custom-row div:first-child {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 120px;
        height: 120px;
      }
    }
    &--custom-row h4,
    &--custom-row h5 {
      white-space: nowrap;
    }
  }
}
@media only screen and (max-width: 1080px) {
  .third-row {
    flex-direction: column;
  }
  .third-row__first-col {
    width: 100%;
  }
  .third-row__second-col {
    width: 100%;
  }
}
.divider {
  height: 100%;
  width: 1px;
  background-color: $border-color;
}
</style>
