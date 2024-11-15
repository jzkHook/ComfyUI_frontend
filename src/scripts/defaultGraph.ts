import type { ComfyWorkflowJSON } from '@/types/comfyWorkflow'
// 生瓶子 json
export const defaultGraph: ComfyWorkflowJSON = {
  last_node_id: 9,
  last_link_id: 18,
  nodes: [
    {
      id: 4,
      type: 'CheckpointLoaderSimple',
      pos: [100, 130],
      size: [320, 100],
      flags: {},
      order: 0,
      mode: 0,
      inputs: [],
      outputs: [
        {
          name: 'MODEL',
          type: 'MODEL',
          links: [10],
          shape: 3,
          label: 'MODEL'
        },
        {
          name: 'CLIP',
          type: 'CLIP',
          links: [14, 15],
          shape: 3,
          label: 'CLIP'
        },
        {
          name: 'VAE',
          type: 'VAE',
          links: [17],
          shape: 3,
          label: 'VAE'
        }
      ],
      properties: {
        'Node name for S&R': 'CheckpointLoaderSimple'
      },
      widgets_values: [
        'XL\\SDXL_写实_juggernautXL_version6Rundiffusion.safetensors'
      ]
    },
    {
      id: 5,
      type: 'EmptyLatentImage',
      pos: [100, 358],
      size: [320, 110],
      flags: {},
      order: 1,
      mode: 0,
      inputs: [],
      outputs: [
        {
          name: 'LATENT',
          type: 'LATENT',
          links: [13],
          shape: 3,
          label: 'LATENT'
        }
      ],
      properties: {
        'Node name for S&R': 'EmptyLatentImage'
      },
      widgets_values: [512, 512, 1]
    },
    {
      id: 7,
      type: 'CLIPTextEncode',
      pos: [515, 460],
      size: [400, 200],
      flags: {},
      order: 3,
      mode: 0,
      inputs: [
        {
          name: 'clip',
          type: 'CLIP',
          link: 15,
          label: 'clip'
        }
      ],
      outputs: [
        {
          name: 'CONDITIONING',
          type: 'CONDITIONING',
          links: [12],
          shape: 3,
          label: 'CONDITIONING'
        }
      ],
      properties: {
        'Node name for S&R': 'CLIPTextEncode'
      },
      widgets_values: ['text, watermark']
    },
    {
      id: 8,
      type: 'VAEDecode',
      pos: [1430, 130],
      size: [210, 50],
      flags: {},
      order: 5,
      mode: 0,
      inputs: [
        {
          name: 'samples',
          type: 'LATENT',
          link: 16,
          label: 'samples'
        },
        {
          name: 'vae',
          type: 'VAE',
          link: 17,
          label: 'vae'
        }
      ],
      outputs: [
        {
          name: 'IMAGE',
          type: 'IMAGE',
          links: [18],
          shape: 3,
          label: 'IMAGE'
        }
      ],
      properties: {
        'Node name for S&R': 'VAEDecode'
      },
      widgets_values: []
    },
    {
      id: 9,
      type: 'SaveImage',
      pos: [1740, 130],
      size: [320, 270],
      flags: {},
      order: 6,
      mode: 0,
      inputs: [
        {
          name: 'images',
          type: 'IMAGE',
          link: 18,
          label: 'images'
        }
      ],
      outputs: [],
      properties: {
        'Node name for S&R': 'SaveImage'
      },
      widgets_values: ['ComfyUI_api']
    },
    {
      id: 3,
      type: 'KSampler',
      pos: [930, 110],
      size: [320, 474],
      flags: {},
      order: 4,
      mode: 0,
      inputs: [
        {
          name: 'model',
          type: 'MODEL',
          link: 10,
          label: 'model'
        },
        {
          name: 'positive',
          type: 'CONDITIONING',
          link: 11,
          label: 'positive'
        },
        {
          name: 'negative',
          type: 'CONDITIONING',
          link: 12,
          label: 'negative'
        },
        {
          name: 'latent_image',
          type: 'LATENT',
          link: 13,
          label: 'latent_image'
        }
      ],
      outputs: [
        {
          name: 'LATENT',
          type: 'LATENT',
          links: [16],
          shape: 3,
          label: 'LATENT'
        }
      ],
      properties: {
        'Node name for S&R': 'KSampler'
      },
      widgets_values: [
        151327163526473,
        'randomize',
        20,
        8,
        'euler',
        'normal',
        1
      ]
    },
    {
      id: 6,
      type: 'CLIPTextEncode',
      pos: [500, -66],
      size: [400, 200],
      flags: {},
      order: 2,
      mode: 0,
      inputs: [
        {
          name: 'clip',
          type: 'CLIP',
          link: 14,
          label: 'clip'
        }
      ],
      outputs: [
        {
          name: 'CONDITIONING',
          type: 'CONDITIONING',
          links: [11],
          shape: 3,
          label: 'CONDITIONING'
        }
      ],
      properties: {
        'Node name for S&R': 'CLIPTextEncode'
      },
      widgets_values: [
        'beautiful scenery nature glass bottle landscape, , purple galaxy bottle,'
      ]
    }
  ],
  links: [
    [10, 4, 0, 3, 0, 'MODEL'],
    [11, 6, 0, 3, 1, 'CONDITIONING'],
    [12, 7, 0, 3, 2, 'CONDITIONING'],
    [13, 5, 0, 3, 3, 'LATENT'],
    [14, 4, 1, 6, 0, 'CLIP'],
    [15, 4, 1, 7, 0, 'CLIP'],
    [16, 3, 0, 8, 0, 'LATENT'],
    [17, 4, 2, 8, 1, 'VAE'],
    [18, 8, 0, 9, 0, 'IMAGE']
  ],
  groups: [],
  config: {},
  extra: {
    ds: {
      scale: 0.8769226950000008,
      offset: [-221.25752432861918, 197.2739887584745]
    }
  },
  version: 0.4
}
