<template>
  <div v-if="project">
    <ProjectDetailHero
      :project="project"
      :illustration="illustration"
    />

    <div class="flex -mt-px border-t border-b border-primary-light flex-col lg:flex-row">
      <div class="w-full lg:w-8/12 lg:border-r border-primary-light">
        <ProjectDetailIntro
          :project="project"
          class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-2"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailContent
          :project="project"
          class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-1"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailTimeline
          :project="project"
          class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-1"
        />
      </div>
      <div class="border-t border-primary-light lg:w-4/12 lg:border-none">
        <ProjectDetailFunctions
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailUsers
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailPartners
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailGallery
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
      </div>
    </div>

    <ProjectDetailTesting
      :project="project"
    />

    <ProjectDetailCta
      :project="project"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      illustration: '<svg style="transform: translateY(1.7%) scale(1.06);margin-left: 15px" class="mt-block-2 w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="765.967" height="648.038" viewBox="0 0 765.967 648.038"><defs><filter id="a" x="0" y="482.557" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur"/><feComposite in="SourceGraphic"/></filter><filter id="b" x="240.584" y="362.076" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-2"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-2"/><feComposite in="SourceGraphic"/></filter><filter id="c" x="120.481" y="120.86" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-3"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-3"/><feComposite in="SourceGraphic"/></filter><filter id="d" x="359.648" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-4"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-4"/><feComposite in="SourceGraphic"/></filter><filter id="e" x="240.584" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-5"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-5"/><feComposite in="SourceGraphic"/></filter><filter id="f" x="240.836" y="120.861" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-6"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-6"/><feComposite in="SourceGraphic"/></filter><filter id="g" x="480.004" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-7"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-7"/><feComposite in="SourceGraphic"/></filter><filter id="h" x="240.836" y=".379" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-8"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-8"/><feComposite in="SourceGraphic"/></filter><filter id="i" x="600.486" y=".38" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-9"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-9"/><feComposite in="SourceGraphic"/></filter><filter id="j" x="359.523" y="120.86" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-10"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-10"/><feComposite in="SourceGraphic"/></filter><filter id="k" x="120.103" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-11"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-11"/><feComposite in="SourceGraphic"/></filter><filter id="l" x="120.103" y="0" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-12"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-12"/><feComposite in="SourceGraphic"/></filter></defs><g style="isolation:isolate"><g filter="url(#a)" transform="translate(-.003 .004)"><path data-name="Rectangle 527" d="M7.5 490.06h120.481v120.481A120.481 120.481 0 0 1 7.5 490.06Z" fill="#b4c7ff"/></g><g filter="url(#b)" transform="translate(-.003 .004)"><path data-name="Rectangle 528" d="M248.08 490.06V369.579h120.481A120.481 120.481 0 0 1 248.08 490.06Z" fill="#1e1796"/></g><g filter="url(#c)" transform="translate(-.003 .004)"><path data-name="Rectangle 556" d="M127.98 128.36h120.481v120.481A120.481 120.481 0 0 1 127.98 128.36Z" fill="#1e1796"/></g><g filter="url(#d)" transform="translate(-.003 .004)"><path data-name="Rectangle 552" d="M367.15 249.22h120.481v120.481A120.481 120.481 0 0 1 367.15 249.22Z" fill="#1e1796"/></g><g filter="url(#e)" transform="translate(-.003 .004)"><path data-name="Rectangle 529" d="M368.56 369.7H248.079V249.219A120.481 120.481 0 0 1 368.56 369.7Z" fill="#1e1796"/></g><g filter="url(#f)" transform="translate(-.003 .004)"><path data-name="Rectangle 554" d="M248.34 248.84V128.359h120.481A120.481 120.481 0 0 1 248.34 248.84Z" fill="#1e1796"/></g><g filter="url(#g)" transform="translate(-.003 .004)"><path data-name="Rectangle 550" d="M487.5 369.7V249.219h120.481A120.481 120.481 0 0 1 487.5 369.7Z" fill="#1e1796"/></g><g filter="url(#h)" transform="translate(-.003 .004)"><path data-name="Rectangle 555" d="M368.82 128.36H248.339V7.879A120.481 120.481 0 0 1 368.82 128.36Z" fill="#f0f5ff"/></g><g filter="url(#i)" transform="translate(-.003 .004)"><path data-name="Rectangle 553" d="M728.47 128.36H607.989V7.879A120.481 120.481 0 0 1 728.47 128.36Z" fill="#f0f5ff"/></g><g filter="url(#j)" transform="translate(-.003 .004)"><path data-name="Rectangle 551" d="M487.5 128.36v120.481H367.019A120.481 120.481 0 0 1 487.5 128.36Z" fill="#b4c7ff"/></g><g filter="url(#k)" transform="translate(-.003 .004)"><path data-name="Rectangle 530" d="M248.08 249.22v120.481H127.599A120.481 120.481 0 0 1 248.08 249.22Z" fill="#f0f5ff"/></g><g filter="url(#l)" transform="translate(-.003 .004)"><path data-name="Rectangle 557" d="M248.08 7.5v120.481H127.599A120.481 120.481 0 0 1 248.08 7.5Z" fill="#b4c7ff"/></g></g></svg>',
      project: null,
      // logo: '<svg xmlns="http://www.w3.org/2000/svg" width="187.511" height="49.264" viewBox="0 0 187.511 49.264"><g data-name="Group 72"><path data-name="Path 73" d="M17.105 15.81a197.4 197.4 0 0 1-.28 19.854c-.061 1.093-.121 1.256.77 1.728 1.2.636 2.385 1.283 3.6 1.867m8.668-27.375c-.238 6.029.375 12.038.39 18.066a34.386 34.386 0 0 0 .219 5.979" fill="none" stroke="#70cf96" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/><path data-name="Path 74" d="M54.098 27.481a3.974 3.974 0 0 1-1.991-2.062 8.663 8.663 0 0 1-.5-3.127v-5.317q0-3.7 1.921-5.048a8.241 8.241 0 0 1 4.732-1.136 8.944 8.944 0 0 1 4.521.867 3.814 3.814 0 0 1 1.757 2.694 10.151 10.151 0 0 1 .164 1.956l-2.237.2a6 6 0 0 0-.293-2.307 2.734 2.734 0 0 0-.586-.867 2.38 2.38 0 0 0-.937-.445 7.66 7.66 0 0 0-2.049-.2 10.061 10.061 0 0 0-2.191.187 3.392 3.392 0 0 0-1.359.609 3.666 3.666 0 0 0-1.077 3.057v6.114q0 2.2 1.089 2.952a6.323 6.323 0 0 0 3.467.737 5.284 5.284 0 0 0 3.045-.562 2.532 2.532 0 0 0 .808-1.64 10.306 10.306 0 0 0 .082-1.405h2.237a6.416 6.416 0 0 1-.738 3.583q-1.358 1.922-5.165 1.921a10.9 10.9 0 0 1-4.7-.762" fill="#1f2938"/><path data-name="Path 75" d="M68.75 27.984v-1.757h3.232V12.793H68.75v-1.75h8.808v1.746h-3.221v13.434h3.221v1.757Z" fill="#1f2938"/><path data-name="Path 76" d="M85.651 27.984v-15h-4.884v-1.941H92.9v1.933H88v15Z" fill="#1f2938"/><path data-name="Path 77" d="M100.443 27.984v-6.653l-6-10.283h2.495l4.685 8.222 4.708-8.222h2.424l-5.961 10.283v6.653Z" fill="#1f2938"/><path data-name="Path 78" d="m116.372 27.984-6.043-16.936h2.424l4.673 13.492 4.673-13.492h2.448l-6.1 16.936Z" fill="#1f2938"/><path data-name="Path 79" d="M127.779 27.984v-1.757h3.232V12.793h-3.232v-1.75h8.808v1.746h-3.221v13.434h3.221v1.757Z" fill="#1f2938"/><path data-name="Path 80" d="M140.92 27.984v-1.757l7.987-13.247h-7.626v-1.937h10.213v1.769l-7.976 13.235h8.128v1.932Z" fill="#1f2938"/><path data-name="Path 81" d="M158.173 27.468a4.167 4.167 0 0 1-2.084-2.072 7.928 7.928 0 0 1-.551-3.1v-5.335q0-3.643 2.062-5.048a8.813 8.813 0 0 1 4.919-1.124q5.763 0 6.594 4.287a10.764 10.764 0 0 1 .175 2.038v5.012q0 3.538-2.026 4.967a7.89 7.89 0 0 1-4.592 1.147 10.3 10.3 0 0 1-4.5-.773m4.334-1.124a6 6 0 0 0 3.373-.738q1.055-.75 1.054-2.952v-6.125a3.618 3.618 0 0 0-1.066-3.022 5.473 5.473 0 0 0-3.35-.82q-3.56 0-4.322 1.968a5.184 5.184 0 0 0-.293 1.874v6.125q0 2.191 1.147 2.94a6.391 6.391 0 0 0 3.455.75" fill="#1f2938"/><path data-name="Path 82" d="M176.385 19.176h4.989a2.248 2.248 0 0 0 2.027-.808 4.1 4.1 0 0 0 .539-2.284q-.012-2.647-1.394-3.115a2.509 2.509 0 0 0-.9-.129h-5.259Zm-2.366 8.808V11.043h7.555q3.5 0 4.392 2.647a7.459 7.459 0 0 1 .328 2.343 6.92 6.92 0 0 1-.3 2.272 3.678 3.678 0 0 1-.82 1.417 3.809 3.809 0 0 1-1.254.808l3.6 7.449h-2.429l-3.361-7.027-5.341.012v7.015Z" fill="#1f2938"/><path data-name="Path 83" d="m10.983 38.204 5.539 2.993 5.54-2.993-5.54-2.995Zm5.042-5.1a1.044 1.044 0 0 1 .995 0l7.739 4.183a1.046 1.046 0 0 1 0 1.84L17.02 43.31a1.047 1.047 0 0 1-.995 0l-7.738-4.183a1.046 1.046 0 0 1 0-1.84Z" fill="#1f2938"/><path data-name="Path 84" d="m8.784 6.417-6.692 3.618v23.359l6.692 3.618 6.693-3.618V10.032Zm-.5-2.108a1.045 1.045 0 0 1 .995 0l7.738 4.184a1.044 1.044 0 0 1 .548.919v24.61a1.044 1.044 0 0 1-.548.919l-7.738 4.183a1.039 1.039 0 0 1-.995 0L.545 34.941a1.044 1.044 0 0 1-.548-.919V9.412a1.044 1.044 0 0 1 .548-.919Z" fill="#1f2938"/><path data-name="Path 85" d="M15.476 11.165v22.232L9.83 36.449V14.218Zm1.581-2.652a1.047 1.047 0 0 0-1.033-.021l-7.738 4.183a1.044 1.044 0 0 0-.548.919v24.609a1.046 1.046 0 0 0 1.543.92l7.738-4.183a1.044 1.044 0 0 0 .548-.92V9.411a1.045 1.045 0 0 0-.51-.9" fill="#1f2938"/><path data-name="Path 86" d="m24.255 2.235-6.692 3.618v27.546l6.692 3.618 6.693-3.618V5.853Zm-.5-2.108a1.042 1.042 0 0 1 .995 0l7.738 4.183a1.045 1.045 0 0 1 .548.92v28.792a1.044 1.044 0 0 1-.548.919l-7.738 4.183a1.042 1.042 0 0 1-.995 0l-7.738-4.183a1.044 1.044 0 0 1-.548-.919V5.23a1.045 1.045 0 0 1 .548-.92Z" fill="#1f2938"/><path data-name="Path 87" d="M30.953 6.983v26.411l-5.647 3.053V10.032Zm1.581-2.651a1.047 1.047 0 0 0-1.033-.022l-7.738 4.183a1.045 1.045 0 0 0-.548.919v28.793a1.046 1.046 0 0 0 1.543.919l7.738-4.183a1.044 1.044 0 0 0 .548-.919V5.23a1.044 1.044 0 0 0-.51-.9" fill="#1f2938"/></g></svg>',
      // badge: 'V přípravě',
    };
  },

  head() {
    return {
      title: `${this.project?.title} ${this.$config.appendTitle}`,
    };
  },

  async mounted() {
    const projects = await this.$axios.$get('/projects/?sort=title:asc&currentPage=1&perPage=10');
    this.project = projects.data.find(({ id }) => id === +this.$route.params.id);
  },
};
</script>
