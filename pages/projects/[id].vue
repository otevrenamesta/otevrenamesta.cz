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

<script setup>
await useContentStore().load({ page: 'project' });

useCustomHead({
  title: useContentStore().project?.hero?.title,
});

// Refs
const illustration = '<svg style="transform: translateY(1.7%) scale(1.06);margin-left: 15px" class="mt-block-2 w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="765.967" height="648.038" viewBox="0 0 765.967 648.038"><defs><filter id="a" x="0" y="482.557" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur"/><feComposite in="SourceGraphic"/></filter><filter id="b" x="240.584" y="362.076" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-2"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-2"/><feComposite in="SourceGraphic"/></filter><filter id="c" x="120.481" y="120.86" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-3"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-3"/><feComposite in="SourceGraphic"/></filter><filter id="d" x="359.648" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-4"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-4"/><feComposite in="SourceGraphic"/></filter><filter id="e" x="240.584" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-5"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-5"/><feComposite in="SourceGraphic"/></filter><filter id="f" x="240.836" y="120.861" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-6"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-6"/><feComposite in="SourceGraphic"/></filter><filter id="g" x="480.004" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-7"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-7"/><feComposite in="SourceGraphic"/></filter><filter id="h" x="240.836" y=".379" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-8"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-8"/><feComposite in="SourceGraphic"/></filter><filter id="i" x="600.486" y=".38" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-9"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-9"/><feComposite in="SourceGraphic"/></filter><filter id="j" x="359.523" y="120.86" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-10"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-10"/><feComposite in="SourceGraphic"/></filter><filter id="k" x="120.103" y="241.721" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-11"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-11"/><feComposite in="SourceGraphic"/></filter><filter id="l" x="120.103" y="0" width="165.481" height="165.481" filterUnits="userSpaceOnUse"><feOffset dx="15" dy="15"/><feGaussianBlur stdDeviation="7.5" result="blur-12"/><feFlood flood-opacity=".149"/><feComposite operator="in" in2="blur-12"/><feComposite in="SourceGraphic"/></filter></defs><g style="isolation:isolate"><g filter="url(#a)" transform="translate(-.003 .004)"><path data-name="Rectangle 527" d="M7.5 490.06h120.481v120.481A120.481 120.481 0 0 1 7.5 490.06Z" fill="#b4c7ff"/></g><g filter="url(#b)" transform="translate(-.003 .004)"><path data-name="Rectangle 528" d="M248.08 490.06V369.579h120.481A120.481 120.481 0 0 1 248.08 490.06Z" fill="#1e1796"/></g><g filter="url(#c)" transform="translate(-.003 .004)"><path data-name="Rectangle 556" d="M127.98 128.36h120.481v120.481A120.481 120.481 0 0 1 127.98 128.36Z" fill="#1e1796"/></g><g filter="url(#d)" transform="translate(-.003 .004)"><path data-name="Rectangle 552" d="M367.15 249.22h120.481v120.481A120.481 120.481 0 0 1 367.15 249.22Z" fill="#1e1796"/></g><g filter="url(#e)" transform="translate(-.003 .004)"><path data-name="Rectangle 529" d="M368.56 369.7H248.079V249.219A120.481 120.481 0 0 1 368.56 369.7Z" fill="#1e1796"/></g><g filter="url(#f)" transform="translate(-.003 .004)"><path data-name="Rectangle 554" d="M248.34 248.84V128.359h120.481A120.481 120.481 0 0 1 248.34 248.84Z" fill="#1e1796"/></g><g filter="url(#g)" transform="translate(-.003 .004)"><path data-name="Rectangle 550" d="M487.5 369.7V249.219h120.481A120.481 120.481 0 0 1 487.5 369.7Z" fill="#1e1796"/></g><g filter="url(#h)" transform="translate(-.003 .004)"><path data-name="Rectangle 555" d="M368.82 128.36H248.339V7.879A120.481 120.481 0 0 1 368.82 128.36Z" fill="#f0f5ff"/></g><g filter="url(#i)" transform="translate(-.003 .004)"><path data-name="Rectangle 553" d="M728.47 128.36H607.989V7.879A120.481 120.481 0 0 1 728.47 128.36Z" fill="#f0f5ff"/></g><g filter="url(#j)" transform="translate(-.003 .004)"><path data-name="Rectangle 551" d="M487.5 128.36v120.481H367.019A120.481 120.481 0 0 1 487.5 128.36Z" fill="#b4c7ff"/></g><g filter="url(#k)" transform="translate(-.003 .004)"><path data-name="Rectangle 530" d="M248.08 249.22v120.481H127.599A120.481 120.481 0 0 1 248.08 249.22Z" fill="#f0f5ff"/></g><g filter="url(#l)" transform="translate(-.003 .004)"><path data-name="Rectangle 557" d="M248.08 7.5v120.481H127.599A120.481 120.481 0 0 1 248.08 7.5Z" fill="#b4c7ff"/></g></g></svg>';
const project = ref(null);

// Lifecycle
onMounted(async() => {
  const projects = await useApi.get(`/items/projects?filter={"id":{"_eq":${Number(useRoute().params.id)}}}&deep={"translations":{"_filter":{"languages_code":{"_eq":"${useI18n()?.locale?.value}"}}}}`).catch((error) => {
    console.error(error);

    return { data: [] };
  });
  console.log('projects:', projects);

  project.value = projects.data.find(({ id }) => id === Number(useRoute().params.id));
});
</script>
