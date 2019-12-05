<template>
<div>
  <!-- <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.factory-layout')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row> -->
  <b-row>
    <b-colxx xxs="12">
        <b-card class="pchild-0">
            <b-row class="px-3">
                <b-colxx sm="1" class="p-0">
                    <div role="tablist">
                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.left-accordion-1 variant="info"><img src="@/assets/img/icons/shapes.svg" height="20"></b-button>
                        </b-card-header>
                        <b-collapse id="left-accordion-1" visible accordion="left-accordion" role="tabpanel">
                            <b-card-body>
                                <ul class="shape-list">
                                    <li @click="newShape('rectangle')"><img src="@/assets/img/icons/rectangle.svg"></li>
                                    <li @click="newShape('square')"><img src="@/assets/img/icons/square.svg"></li>
                                    <li @click="newShape('circle')"><img src="@/assets/img/icons/circle.svg"></li>
                                    <li @click="newShape('triangle')"><img src="@/assets/img/icons/triangle.svg"></li>
                                    <li @click="newShape('polygon')"><img src="@/assets/img/icons/polygon.svg"></li>
                                    <li @click="newShape('hexagon')"><img src="@/assets/img/icons/hexagon.svg"></li>
                                    <li @click="newShape('rhomb')"><img src="@/assets/img/icons/rhomb.svg"></li>
                                    <li @click="newShape('arrow')"><img src="@/assets/img/icons/arrow.svg"></li>
                                </ul>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.left-accordion-2 variant="info"><img src="@/assets/img/icons/3d-shapes.svg" height="20"></b-button>
                        </b-card-header>
                        <b-collapse id="left-accordion-2" accordion="left-accordion" role="tabpanel">
                            <b-card-body>
                                <ul class="shape-list">
                                    <li @click="newShape('image', 'assembly-line.svg')"><img src="@/assets/img/icons/3d/assembly-line.svg"></li>
                                    <li @click="newShape('image', 'building-crane.svg')"><img src="@/assets/img/icons/3d/building-crane.svg"></li>
                                    <li @click="newShape('image', 'conveyor-1.svg')"><img src="@/assets/img/icons/3d/conveyor-1.svg"></li>
                                    <li @click="newShape('image', 'conveyor-2.svg')"><img src="@/assets/img/icons/3d/conveyor-2.svg"></li>
                                    <li @click="newShape('image', 'conveyor-3.svg')"><img src="@/assets/img/icons/3d/conveyor-3.svg"></li>
                                    <li @click="newShape('image', 'conveyor.svg')"><img src="@/assets/img/icons/3d/conveyor.svg"></li>
                                    <li @click="newShape('image', 'excavator-1.svg')"><img src="@/assets/img/icons/3d/excavator-1.svg"></li>
                                    <li @click="newShape('image', 'excavator.svg')"><img src="@/assets/img/icons/3d/excavator.svg"></li>
                                    <li @click="newShape('image', 'factory.svg')"><img src="@/assets/img/icons/3d/factory.svg"></li>
                                    <li @click="newShape('image', 'heavy-machinery.svg')"><img src="@/assets/img/icons/3d/heavy-machinery.svg"></li>
                                    <li @click="newShape('image', 'machinery-1.svg')"><img src="@/assets/img/icons/3d/machinery-1.svg"></li>
                                    <li @click="newShape('image', 'machinery.svg')"><img src="@/assets/img/icons/3d/machinery.svg"></li>
                                    <li @click="newShape('image', 'manufacture.svg')"><img src="@/assets/img/icons/3d/manufacture.svg"></li>
                                    <li @click="newShape('image', 'product.svg')"><img src="@/assets/img/icons/3d/product.svg"></li>
                                    <li @click="newShape('image', 'robot-arm-1.svg')"><img src="@/assets/img/icons/3d/robot-arm-1.svg"></li>
                                    <li @click="newShape('image', 'robot-arm.svg')"><img src="@/assets/img/icons/3d/robot-arm.svg"></li>
                                    <li @click="newShape('image', 'robot.svg')"><img src="@/assets/img/icons/3d/robot.svg"></li>
                                    <li @click="newShape('image', 'welder.svg')"><img src="@/assets/img/icons/3d/welder.svg"></li>
                                    <li @click="newShape('image', 'welding.svg')"><img src="@/assets/img/icons/3d/welding.svg"></li>
                                </ul>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </b-colxx>

                <b-colxx sm="8" class="p-0" ref="factoryLayout" id="factoryLayout">
                    <v-stage ref="stage" :config="stageSize" @mousedown="handleStageMouseDown">
                        <v-layer ref="layer">
                          <component v-for="shape in shapes" v-bind:is="shape.type" :config="shape.config" :key="shape.id"></component>
                          <v-transformer ref="transformer" />
                        </v-layer>
                    </v-stage>
                </b-colxx>

                <b-colxx sm="3" class="p-0">
                    <div role="tablist">
                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.right-accordion-1 variant="info">Properties</b-button>
                        </b-card-header>
                        <b-collapse id="right-accordion-1" accordion="right-accordion" role="tabpanel">
                            <b-card-body>
                                <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
                                    <b-form-group id="input-group-1" label="Enter tooltip:" label-for="input-1">
                                        <b-form-input
                                        id="input-1"
                                        v-model="form.tooltip"
                                        type="text"
                                        placeholder="Enter name"
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-2" label="Background Color:" label-for="input-2">
                                        <b-form-input
                                        id="input-2"
                                        v-model="form.bgcolor"
                                        type="color"
                                        placeholder="Background color"
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-3" label="Stroke Color:" label-for="input-3">
                                        <b-form-input
                                        id="input-3"
                                        v-model="form.strokecolor"
                                        type="color"
                                        placeholder="Stroke color"
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-3" label="Stroke Width:" label-for="input-3">
                                        <b-form-input
                                        id="input-3"
                                        v-model="form.strokewidth"
                                        type="range"
                                        placeholder="Stroke width"
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-3" label="Connect:" label-for="input-3">
                                        <b-form-select
                                        id="input-3"
                                        v-model="form.shape"
                                        :options="[{ text: 'Select One', value: null }, ...shapes]"
                                        ></b-form-select>
                                    </b-form-group>

                                    <b-button type="submit" variant="primary">Submit</b-button>
                                    <b-button type="reset" variant="warning">Reset</b-button>
                                </b-form>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.right-accordion-2 variant="info">Connections</b-button>
                        </b-card-header>
                        <b-collapse id="right-accordion-2" accordion="right-accordion" role="tabpanel">
                            <b-card-body>
                                <ol>
                                    <li v-for="(shape, index) in shapes" v-bind:key="index">{{ shape.type }} ({{ shape.id }})</li>
                                </ol>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

const width = window.innerWidth
const height = window.innerHeight - 130 - 40

export default {
  data () {
    return {
      stageSize: {
        width: width,
        height: height
      },
      form: {
        tooltip: '',
        bgcolor: '',
        strokecolor: '',
        strokewidth: '',
        shape: null
      },
      show: true,
      circle: 0,
      rect: 0,
      sq: 0,
      shapes: [
        {
          id: 1,
          type: 'v-circle',
          config: {
            x: 300,
            y: 100,
            radius: 70,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
            name: 'circle1'
          }
        }
      ],
      selectedShapeName: ''
    }
  },
  computed: {
    ...mapGetters({
      menuClickCount: 'getMenuClickCount'
    })
  },
  methods: {
    ...mapMutations(['changeSideMenuStatus']),
    onSubmit () {},
    onReset () {},
    newShape (kind, image) {
      let shape = {
        id: this.shapes.length + 1,
        type: '',
        config: {
          x: 100,
          y: 100,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4,
          draggable: true,
          name: `${kind}${this.shapes.length + 1}`
        }
      }

      switch (kind) {
        case 'rectangle':
          shape.type = 'v-rect'
          shape.config.width = 140
          shape.config.height = 100
          break
        case 'square':
          shape.type = 'v-rect'
          shape.config.width = 140
          shape.config.height = 140
          break
        case 'circle':
          shape.type = 'v-circle'
          shape.config.radius = 70
          break
        case 'triangle':
          shape.type = 'v-star'
          shape.config.numPoints = 3
          shape.config.innerRadius = 35
          shape.config.outerRadius = 70
          break
        case 'polygon':
          shape.type = 'v-star'
          shape.config.numPoints = 5
          shape.config.innerRadius = 35
          shape.config.outerRadius = 70
          break
        case 'hexagon':
          shape.type = 'v-star'
          shape.config.numPoints = 3
          shape.config.rotation = 90
          shape.config.innerRadius = 70
          shape.config.outerRadius = 70
          break
        case 'rhomb':
          shape.type = 'v-star'
          shape.config.numPoints = 2
          shape.config.innerRadius = 70
          shape.config.outerRadius = 70
          break
        case 'arrow':
          shape.type = 'v-arrow'
          shape.config.points = [0, this.stageSize.height / 8, this.stageSize.width / 8, this.stageSize.height / 8]
          shape.config.tension = 1
          shape.config.pointerLength = 10
          shape.config.pointerWidth = 12
          break
        case 'image':
          var imageObj = new Image()
          imageObj.src = `/assets/img/icons/3d/${image}`
          imageObj.onload = () => {
            shape.type = 'v-image'
            shape.config.fill = ''
            shape.config.stroke = ''
            shape.config.width = 140
            shape.config.height = 140
            shape.config.image = imageObj
          }
          break
        default:
          shape = {}
      }

      this.shapes.push(shape)
    },
    handleStageMouseDown (e) {
      // clicked on stage - cler selection
      if (e.target === e.target.getStage()) {
        this.selectedShapeName = ''
        this.updateTransformer()
        return
      }

      // clicked on transformer - do nothing
      const clickedOnTransformer =
        e.target.getParent().className === 'Transformer'
      if (clickedOnTransformer) {
        return
      }

      // find clicked rect by its name
      const name = e.target.name()
      const shape = this.shapes.find(shape => shape.config.name === name)
      if (shape) {
        this.selectedShapeName = name
      } else {
        this.selectedShapeName = ''
      }
      this.updateTransformer()
    },
    updateTransformer () {
      // here we need to manually attach or detach Transformer node
      const transformerNode = this.$refs.transformer.getStage()
      const stage = transformerNode.getStage()
      const { selectedShapeName } = this

      const selectedNode = stage.findOne('.' + selectedShapeName)
      // do nothing if selected node is already attached
      if (selectedNode === transformerNode.node()) {
        return
      }

      if (selectedNode) {
        // attach to another node
        transformerNode.attachTo(selectedNode)
      } else {
        // remove transformer
        transformerNode.detach()
      }
      transformerNode.getLayer().batchDraw()
    }
  },
  created () {
    this.changeSideMenuStatus({ step: this.menuClickCount + 1, classNames: 'menu-hidden' })
  },
  beforeDestroy () {
    this.changeSideMenuStatus({ step: this.menuClickCount + 1, classNames: 'menu-default menu-sub-hidden' })
  }
}
</script>

<style scoped>
.pchild-0 > .card-body {
  padding: 0;
}
#factoryLayout {
  border: 1px solid #000;
  overflow: scroll;
  background: url('/assets/img/canvas-grid.png') repeat;
}
.card-header {
  padding: 0;
}
.card-header .btn {
  border-radius: 0;
}
.card-body {
  padding: 0.5rem;
}
.shape-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
}
.shape-list li {
  padding: 0.25rem;
}
.shape-list li img {
  height: 25px;
}
</style>
