<?php

namespace Drupal\osu_icon_field\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;

/**
 * A widget for OSU Icon.
 *
 * @FieldWidget(
 *   id = "osu_icon_widget",
 *   label = @Translation("OSU Icon"),
 *   field_types = {
 *     "osu_icon"
 *   }
 * )
 */
class OsuIconWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $value = isset($items[$delta]->value) ? $items[$delta]->value : '';
    $element += [
      '#type' => 'textfield',
      '#default_value' => $value,
      '#size' => 10000,
      '#maxlength' => 100,
      '#id' => 'osuIconInput'
    ];
    return ['value' => $element];
  }

}
