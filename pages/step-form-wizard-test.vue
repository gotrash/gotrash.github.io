<template>
  <div class="d-flex align-items-center justify-content-around h-100">
    <b-card class="rounded-lg" body-bg-variant="light" footer-bg-variant="light" header-bg-variant="light">
      <div>
        <h1>{{ $t("PAGE_TITLE__HOME") }}</h1>
      </div>
      <postcode-checker />
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group label="Postcode">
          <b-form-input id="postcode-input" class="custom-text-field" />
        </b-form-group>
      </b-form>

      <step-navigation :currentstep.sync="currentstep" :steps="steps" />
      <div v-show="currentstep == 1">
        <h3>Step 1</h3>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control" placeholder="Password" />
        </div>
      </div>

      <div v-show="currentstep == 2">
        <h3>Step 2</h3>
        <div class="form-group">
          <label for="select">Example select</label>
          <select class="form-control" name="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

      <div v-show="currentstep == 3">
        <h3>Step 3</h3>
        <div class="form-group">
          <label for="textarea">Example textarea</label>
          <textarea class="form-control" name="textarea" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="file">File input</label>
          <input type="file" class="form-control-file" name="file" aria-describedby="fileHelp" />
          <small id="fileHelp" class="form-text text-muted"
            >This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to
            a new line.</small
          >
        </div>
      </div>

      <step
        v-for="step in steps"
        :key="step.id"
        :currentstep="currentstep"
        :step="step"
        :stepcount="steps.length"
        @step-change="stepChanged"
      >
      </step>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    auth: false,
    components: {
      PostcodeChecker: () => import("~/components/PostcodeChecker"),
      StepNavigation: () => import("~/components/wizard/StepNavigation"),
      Step: () => import("~/components/wizard/Step")
    },
    layout: "home",
    data() {
      return {
        currentstep: 1,

        steps: [
          {
            id: 1,
            title: "Personal",
            icon: "user"
          },
          {
            id: 2,
            title: "Details",
            icon: "th"
          },
          {
            id: 3,
            title: "Send",
            icon: ["far", "paper-plane"]
          }
        ]
      };
    },
    computed: {
      height() {
        if (!process.client) return null;

        return window.innerHeight + "px";
      }
    },
    methods: {
      onSubmit() {},
      stepChanged(step) {
        this.currentstep = step;
      }
    }
  };
</script>
